#!/usr/bin/env python3
"""Remove all emojis from Sayonarat TSX pages, replace with SVG icons."""

import os
import re
import glob

BASE = "/Users/elifontu/SEO-CURSOR/SayonaratCursor/sayonarat/app"


def add_icon_import(content: str, icons: set, path: str = "@/components/Icons") -> str:
    if not icons:
        return content
    icons_sorted = sorted(icons)
    pattern = r'import\s*\{([^}]+)\}\s*from\s*[\'"]' + re.escape(path) + r'[\'"]'
    m = re.search(pattern, content)
    if m:
        existing = {n.strip() for n in m.group(1).split(",") if n.strip()}
        if set(icons_sorted).issubset(existing):
            return content
        all_icons = sorted(existing | set(icons_sorted))
        new_import = f'import {{ {", ".join(all_icons)} }} from "{path}";'
        return content[: m.start()] + new_import + content[m.end() :]
    # Add after last import line
    last_end = 0
    for m2 in re.finditer(r"^import\s.+?;?\s*$", content, re.MULTILINE):
        last_end = m2.end()
    return (
        content[:last_end]
        + f'\nimport {{ {", ".join(icons_sorted)} }} from "{path}";'
        + content[last_end:]
    )


def fix_file(path: str) -> bool:
    with open(path, encoding="utf-8") as f:
        original = f.read()
    content = original
    icons_needed = set()

    # ====== GLOBAL SIMPLE TEXT REMOVALS ======
    # Phone emoji from button text
    for phone_text in [
        "📞 Appeler maintenant",
        "📞 +32 466 44 24 54",
        "📞 Devis gratuit sous 24h",
    ]:
        content = content.replace(phone_text, phone_text.replace("📞 ", ""))

    # Decorative heading emojis (just remove)
    content = re.sub(r"📊\s*", "", content)
    content = re.sub(r"📖\s*", "", content)

    # ⚠️ in text headings (styled box already conveys warning)
    content = re.sub(r"⚠️\s*(?=[A-ZN])", "", content)
    content = content.replace(" ⚠️", "")  # "Frelon asiatique ⚠️"

    # ✅ in inline text spans like "✅ Résultat en 1 passage"
    content = content.replace(
        "✅ Résultat en 1 passage · Sans chimique",
        "Résultat en 1 passage · Sans chimique",
    )
    content = content.replace(
        "✅ Résultat en 1 passage · Dès le soir même",
        "Résultat en 1 passage · Dès le soir même",
    )
    content = content.replace(
        "✅ Moins coûteux · Efficace sur grandes surfaces",
        "Moins coûteux · Efficace sur grandes surfaces",
    )

    # ❌ from bold headings
    content = re.sub(r"❌\s*", "", content)

    # ⚙️ from text spans in data
    content = re.sub(r'emoji: "⚙️"', 'emoji: "gear"', content)

    # ✓ SPF — keep as-is (typographic char, not emoji)

    # ====== SPAN ICON REPLACEMENTS ======
    # ⚠ (U+26A0) warning span in cafards list items
    if '<span className="text-amber-500 mt-0.5">⚠</span>' in content:
        content = content.replace(
            '<span className="text-amber-500 mt-0.5">⚠</span>',
            '<WarningIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />',
        )
        icons_needed.add("WarningIcon")

    # ⚠️ span in punaises list items
    if '<span className="text-red-500 mt-0.5">⚠️</span>' in content:
        content = content.replace(
            '<span className="text-red-500 mt-0.5">⚠️</span>',
            '<WarningIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />',
        )
        icons_needed.add("WarningIcon")

    # ✅ standalone icon spans
    for cls in ["text-2xl", "text-xl", "text-3xl"]:
        old = f'<span className="{cls}">✅</span>'
        if old in content:
            content = content.replace(
                old,
                '<CheckCircleIcon className="w-7 h-7 text-green-600 flex-shrink-0" />',
            )
            icons_needed.add("CheckCircleIcon")

    # 📞 in standalone spans (urgence page CTAs)
    if '<span className="text-2xl">📞</span>' in content:
        content = content.replace(
            '<span className="text-2xl">📞</span>',
            '<PhoneIcon className="w-6 h-6" />',
        )
        icons_needed.add("PhoneIcon")
    if '<span className="text-3xl">📞</span>' in content:
        content = content.replace(
            '<span className="text-3xl">📞</span>',
            '<PhoneIcon className="w-7 h-7" />',
        )
        icons_needed.add("PhoneIcon")

    # ====== STANDALONE DIV EMOJI REPLACEMENTS ======
    # Punaises treatment type icons (standalone divs, not in data arrays)
    if '<div className="text-3xl mb-3">🔥</div>' in content:
        content = content.replace(
            '<div className="text-3xl mb-3">🔥</div>',
            '<div className="mb-3"><FlameIcon className="w-8 h-8" style={{ color: "#1B4332" }} /></div>',
        )
        icons_needed.add("FlameIcon")
    if '<div className="text-3xl mb-3">💊</div>' in content:
        content = content.replace(
            '<div className="text-3xl mb-3">💊</div>',
            '<div className="mb-3"><PillIcon className="w-8 h-8" style={{ color: "#1B4332" }} /></div>',
        )
        icons_needed.add("PillIcon")

    # ====== DATA ARRAY CARD RENDER REPLACEMENTS ======

    # FOURMIS pages: { emoji: "🔍"/"🧪"/"✅" } with {card.emoji} render
    if '{ emoji: "🔍"' in content and "{card.emoji}" in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{card.emoji}</div>',
            '<div className="mb-3">{card.emoji === "🔍" ? <SearchIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : card.emoji === "🧪" ? <BeakerIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>',
        )
        icons_needed.update({"SearchIcon", "BeakerIcon", "CheckCircleIcon"})

    # MITES pages: { icon: "🔍"/"🧪"/"✅" } with {s.icon} render (text-3xl mb-3)
    if '{ icon: "🔍"' in content and "{s.icon}" in content:
        content = content.replace(
            '<div className="text-3xl mb-3">{s.icon}</div>',
            '<div className="mb-3">{s.icon === "🔍" ? <SearchIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : s.icon === "🧪" ? <BeakerIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>',
        )
        icons_needed.update({"SearchIcon", "BeakerIcon", "CheckCircleIcon"})

    # GUEPES pages: { emoji: "🌙"/"🛡️"/"✅" } with {c.emoji} render
    if '{ emoji: "🌙"' in content and "{c.emoji}" in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{c.emoji}</div>',
            '<div className="mb-3">{c.emoji === "🌙" ? <MoonIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🛡️" ? <ShieldCheckIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>',
        )
        icons_needed.update({"MoonIcon", "ShieldCheckIcon", "CheckCircleIcon"})

    # DESINSECTISATION nuisibles list: { icon: "🪲"/"🪳" } with {s.icon} render (text-3xl mb-3)
    if ('{ icon: "🪲"' in content or '{ icon: "🪳"' in content) and "{s.icon}" in content:
        content = content.replace(
            '<div className="text-3xl mb-3">{s.icon}</div>',
            '<div className="mb-3">{s.icon === "🪲" || s.icon === "🪳" ? <CockroachIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : s.icon === "🐜" ? <AntIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : s.icon === "🐝" ? <WaspIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <MosquitoIcon className="w-8 h-8" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"CockroachIcon", "AntIcon", "WaspIcon", "MosquitoIcon"})

    # DESINSECTISATION "notre intervention": { icon: "⚡"/"📋"/"✅" } with {item.icon}
    if '{ icon: "📋"' in content and "{item.icon}" in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{item.icon}</div>',
            '<div className="mb-3">{item.icon === "⚡" ? <BoltIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : item.icon === "📋" ? <ClipboardIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>',
        )
        icons_needed.update({"BoltIcon", "ClipboardIcon", "CheckCircleIcon"})

    # PUNAISES "intervention" section: { icon: "⚡"/"🎯"/"✅" } with {item.icon}
    if '{ icon: "🎯"' in content and "{item.icon}" in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{item.icon}</div>',
            '<div className="mb-3">{item.icon === "⚡" ? <BoltIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : item.icon === "🎯" ? <TargetIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>',
        )
        icons_needed.update({"BoltIcon", "TargetIcon", "CheckCircleIcon"})

    # URGENCE scenarios: { emoji: "🐝"/"🐀"/"🛏️"/"🪳"/"🐜"/"🏢" } with {s.emoji}
    if '{ emoji: "🐝"' in content and "{s.emoji}" in content:
        content = content.replace(
            "<div className=\"text-4xl mb-4\">{s.emoji}</div>",
            '<div className="mb-4">{s.emoji === "🐝" ? <WaspIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🐀" ? <RatIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🛏️" ? <BedBugIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🪳" ? <CockroachIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🐜" ? <AntIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : <BuildingIcon className="w-10 h-10" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"WaspIcon", "RatIcon", "BedBugIcon", "CockroachIcon", "AntIcon", "BuildingIcon"})

    # URGENCE trust bar: { emoji: "🏅"/"🛡️"/"💶"/"🔒" } with {t.emoji}
    if '{ emoji: "🏅"' in content and "{t.emoji}" in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{t.emoji}</div>',
            '<div className="mb-2">{t.emoji === "🏅" ? <BadgeCheckIcon className="w-8 h-8 mx-auto" style={{ color: "#1B4332" }} /> : t.emoji === "🛡️" ? <ShieldCheckIcon className="w-8 h-8 mx-auto" style={{ color: "#1B4332" }} /> : t.emoji === "💶" ? <EuroIcon className="w-8 h-8 mx-auto" style={{ color: "#1B4332" }} /> : <LockIcon className="w-8 h-8 mx-auto" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"BadgeCheckIcon", "ShieldCheckIcon", "EuroIcon", "LockIcon"})

    # NUISIBLES service cards: { icon: "🐀"/"🪳"/"🛏️"/"🐝"/"🐜"/"🪲" } with {service.icon}
    if '{ icon: "🐀"' in content and "{service.icon}" in content:
        content = content.replace(
            '<div className="text-4xl mb-3">{service.icon}</div>',
            '<div className="mb-3">{service.icon === "🐀" ? <RatIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : service.icon === "🪳" || service.icon === "🪲" ? <CockroachIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : service.icon === "🛏️" ? <BedBugIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : service.icon === "🐝" ? <WaspIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : <AntIcon className="w-10 h-10" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"RatIcon", "CockroachIcon", "BedBugIcon", "WaspIcon", "AntIcon"})

    # NUISIBLES "pourquoi" section: { icon: "🎓"/"⚡"/"🛡️"/"💰" } with {item.icon}
    if '{ icon: "🎓"' in content and "{item.icon}" in content:
        content = content.replace(
            '<div className="text-3xl">{item.icon}</div>',
            '<div>{item.icon === "🎓" ? <GraduationCapIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : item.icon === "⚡" ? <BoltIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : item.icon === "🛡️" ? <ShieldCheckIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <EuroIcon className="w-8 h-8" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"GraduationCapIcon", "BoltIcon", "ShieldCheckIcon", "EuroIcon"})

    # A-PROPOS data: { emoji: "🎯"/"📍"/"🔒"/"🏅"/"⚡"/"🤝" } with {item.emoji}
    if '{ emoji: "🎯"' in content and "{item.emoji}" in content:
        content = content.replace(
            '<div className="text-4xl mb-4">{item.emoji}</div>',
            '<div className="mb-4">{item.emoji === "🎯" ? <TargetIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : item.emoji === "📍" ? <MapPinIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : item.emoji === "🔒" ? <LockIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : item.emoji === "🏅" ? <BadgeCheckIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : item.emoji === "⚡" ? <BoltIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : <UsersIcon className="w-10 h-10" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"TargetIcon", "MapPinIcon", "LockIcon", "BadgeCheckIcon", "BoltIcon", "UsersIcon"})

    # A-PROPOS inline credentials: <span>🏅</span> etc.
    for emoji, icon_expr in [
        ("<span>🏅</span>", '<BadgeCheckIcon className="w-4 h-4 inline" style={{ color: "#1B4332" }} />'),
        ("<span>📍</span>", '<MapPinIcon className="w-4 h-4 inline" style={{ color: "#1B4332" }} />'),
        ("<span>🎓</span>", '<GraduationCapIcon className="w-4 h-4 inline" style={{ color: "#1B4332" }} />'),
    ]:
        if emoji in content:
            content = content.replace(emoji, icon_expr)
            if "BadgeCheckIcon" in icon_expr:
                icons_needed.add("BadgeCheckIcon")
            if "MapPinIcon" in icon_expr:
                icons_needed.add("MapPinIcon")
            if "GraduationCapIcon" in icon_expr:
                icons_needed.add("GraduationCapIcon")

    # A-PROPOS inline ✅ div
    if '<div className="text-xl mb-2">✅</div>' in content:
        content = content.replace(
            '<div className="text-xl mb-2">✅</div>',
            '<div className="mb-2"><CheckCircleIcon className="w-6 h-6 text-green-600" /></div>',
        )
        icons_needed.add("CheckCircleIcon")

    # CONTACT page info cards: { icon: "📍"/"💶"/"🔒" } with {item.icon}
    if '{ icon: "📍"' in content and "{item.icon}" in content:
        content = content.replace(
            '<div className="text-2xl mb-2">{item.icon}</div>',
            '<div className="mb-2">{item.icon === "📍" ? <MapPinIcon className="w-7 h-7 mx-auto" style={{ color: "#1B4332" }} /> : item.icon === "💶" ? <EuroIcon className="w-7 h-7 mx-auto" style={{ color: "#1B4332" }} /> : <LockIcon className="w-7 h-7 mx-auto" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"MapPinIcon", "EuroIcon", "LockIcon"})

    # BLOG cafards: { emoji: "✅"/"gear" } with {card.emoji} (gear was already replaced above)
    if '{ emoji: "✅"' in content and "{card.emoji}" in content:
        content = content.replace(
            '<div className="text-3xl mb-3">{card.emoji}</div>',
            '<div className="mb-3">{card.emoji === "✅" ? <CheckCircleIcon className="w-8 h-8 text-green-600" /> : <GearIcon className="w-8 h-8" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"CheckCircleIcon", "GearIcon"})

    # Apply icon imports if any changes were made
    if icons_needed:
        content = add_icon_import(content, icons_needed)

    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False


# Process all TSX files
files = sorted(glob.glob(f"{BASE}/**/*.tsx", recursive=True))
changed = 0
for f in files:
    if fix_file(f):
        rel = f.replace(BASE + "/", "")
        print(f"Fixed: {rel}")
        changed += 1

print(f"\nTotal: {changed} files changed")
