#!/usr/bin/env python3
"""Fix guepes pages: replace card.emoji renders + fix imports."""

import glob, re

BASE = "/Users/elifontu/SEO-CURSOR/SayonaratCursor/sayonarat/app"

RENDER_OLD = '<div className="text-3xl mb-2">{card.emoji}</div>'
RENDER_NEW = (
    '<div className="mb-2">'
    '{card.emoji === "🌙" ? <MoonIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> '
    ': card.emoji === "🛡️" ? <ShieldCheckIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> '
    ': <CheckCircleIcon className="w-8 h-8 text-green-600" />}'
    '</div>'
)

IMPORT_ICONS = '{"@/components/Icons"}'
NEEDED = {"CheckCircleIcon", "MoonIcon", "ShieldCheckIcon"}

files = sorted(glob.glob(f"{BASE}/guepes-frelons-*/page.tsx"))
changed = 0

for path in files:
    with open(path, encoding="utf-8") as f:
        original = f.read()
    content = original

    if RENDER_OLD not in content:
        continue

    content = content.replace(RENDER_OLD, RENDER_NEW)

    # Fix import line
    pattern = r'import\s*\{([^}]+)\}\s*from\s*[\'"]@/components/Icons[\'"]'
    m = re.search(pattern, content)
    if m:
        existing = {n.strip() for n in m.group(1).split(",") if n.strip()}
        all_icons = sorted(existing | NEEDED)
        # Remove GearIcon if it was added spuriously and is not used
        all_icons = [i for i in all_icons if i != "GearIcon"]
        new_import = f'import {{ {", ".join(all_icons)} }} from "@/components/Icons";'
        content = content[: m.start()] + new_import + content[m.end() :]
    else:
        last_end = 0
        for m2 in re.finditer(r"^import\s.+?;?\s*$", content, re.MULTILINE):
            last_end = m2.end()
        icons_str = ", ".join(sorted(NEEDED))
        content = content[:last_end] + f'\nimport {{ {icons_str} }} from "@/components/Icons";' + content[last_end:]

    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed: {path.split('/app/')[1]}")
        changed += 1

print(f"\nTotal: {changed} files changed")
