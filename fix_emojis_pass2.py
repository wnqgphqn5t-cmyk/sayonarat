#!/usr/bin/env python3
"""Second pass: fix remaining emoji patterns missed in pass 1."""

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

    # === URGENCE page: {s.emoji} with text-4xl mb-4 ===
    if "{s.emoji}" in content and '<div className="text-4xl mb-4">{s.emoji}</div>' in content:
        content = content.replace(
            '<div className="text-4xl mb-4">{s.emoji}</div>',
            '<div className="mb-4">{s.emoji === "🐝" ? <WaspIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🐀" ? <RatIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🛏️" ? <BedBugIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🪳" ? <CockroachIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : s.emoji === "🐜" ? <AntIcon className="w-10 h-10" style={{ color: "#1B4332" }} /> : <BuildingIcon className="w-10 h-10" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"WaspIcon", "RatIcon", "BedBugIcon", "CockroachIcon", "AntIcon", "BuildingIcon"})

    # === CONTACT page: {item.icon} in span (not div) ===
    if '<span className="text-2xl">{item.icon}</span>' in content and '{ icon: "📍"' in content:
        content = content.replace(
            '<span className="text-2xl">{item.icon}</span>',
            '<span>{item.icon === "📍" ? <MapPinIcon className="w-7 h-7" style={{ color: "#1B4332" }} /> : item.icon === "💶" ? <EuroIcon className="w-7 h-7" style={{ color: "#1B4332" }} /> : <LockIcon className="w-7 h-7" style={{ color: "#1B4332" }} />}</span>',
        )
        icons_needed.update({"MapPinIcon", "EuroIcon", "LockIcon"})

    # === DERATISATION pages: {c.emoji} + { emoji: "🔍" } pattern, text-3xl mb-2 ===
    # Also catches fourmis-liege which uses same pattern
    if '{ emoji: "🔍"' in content and "{c.emoji}" in content and '<div className="text-3xl mb-2">{c.emoji}</div>' in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{c.emoji}</div>',
            '<div className="mb-3">{c.emoji === "🔍" ? <SearchIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🎯" ? <TargetIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🧪" ? <BeakerIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>',
        )
        icons_needed.update({"SearchIcon", "TargetIcon", "BeakerIcon", "CheckCircleIcon"})

    # === DESINSECTISATION pages: {c.emoji} + { emoji: "🪳" } pattern, text-3xl mb-2 ===
    if '{ emoji: "🪳"' in content and "{c.emoji}" in content and '<div className="text-3xl mb-2">{c.emoji}</div>' in content:
        content = content.replace(
            '<div className="text-3xl mb-2">{c.emoji}</div>',
            '<div className="mb-3">{c.emoji === "🪳" ? <CockroachIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🐜" ? <AntIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🐝" ? <WaspIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <MothIcon className="w-8 h-8" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"CockroachIcon", "AntIcon", "WaspIcon", "MothIcon"})

    # === BLOG cafards: {c.emoji} with text-2xl mb-2, emoji "✅"/"gear" ===
    if '{ emoji: "✅"' in content and "{c.emoji}" in content and '<div className="text-2xl mb-2">{c.emoji}</div>' in content:
        content = content.replace(
            '<div className="text-2xl mb-2">{c.emoji}</div>',
            '<div className="mb-2">{c.emoji === "✅" ? <CheckCircleIcon className="w-7 h-7 text-green-600" /> : <GearIcon className="w-7 h-7" style={{ color: "#1B4332" }} />}</div>',
        )
        icons_needed.update({"CheckCircleIcon", "GearIcon"})

    # === FOURMIS-LIEGE ant color emojis: {e.emoji} in span ===
    # Replace color emojis with colored circles (no SVG icon needed)
    if '{e.emoji}' in content:
        content = content.replace(
            '<span className="text-2xl">{e.emoji}</span>',
            '<span className="inline-block w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: e.emoji === "🟡" ? "#EAB308" : e.emoji === "🪵" ? "#92400E" : e.emoji === "🔴" ? "#DC2626" : "#111827" }}></span>',
        )

    # === PUNAISES extra ✅ text variants not in pass 1 ===
    for txt in [
        "✅ Moins coûteux · Adapté aux petites surfaces",
        "✅ Résultat garanti · Aucune évacuation",
        "✅ Sans évacuation · Aucune odeur",
    ]:
        content = content.replace(txt, txt.replace("✅ ", ""))

    # === Remove remaining standalone ✅ / ⚠️ in inline text ===
    # Any remaining ✅ in non-conditional text contexts (text spans in paragraphs)
    content = re.sub(r'(?<!["\'])✅\s+(?![\w"])', "", content)  # ✅ not in string literals
    content = re.sub(r'(?<!["\'])⚠️\s+', "", content)  # ⚠️ not in string literals

    if icons_needed:
        content = add_icon_import(content, icons_needed)

    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False


files = sorted(glob.glob(f"{BASE}/**/*.tsx", recursive=True))
changed = 0
for f in files:
    if fix_file(f):
        print(f"Fixed: {f.replace(BASE + '/', '')}")
        changed += 1

print(f"\nTotal: {changed} files changed")
