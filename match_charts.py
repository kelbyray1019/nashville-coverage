import os
import json
import re
import urllib.parse
import glob

CHARTS_DIR = os.path.expanduser("~/Library/Mobile Documents/com~apple~CloudDocs/Documents/BROADWAY ALL")
OUTPUT_JSON = "songs_with_charts.json"

# Auto-find most recent nashville-coverage export
exports = glob.glob("nashville-coverage-*.json")
if not exports:
    print("ERROR: No nashville-coverage export found in this folder.")
    exit(1)
TRACKER_JSON = max(exports, key=os.path.getmtime)
print(f"Using: {TRACKER_JSON}\n")

def normalize(s):
    s = s.lower()
    s = re.sub(r"[^a-z0-9\s]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

chart_index = {}
for root, dirs, files in os.walk(CHARTS_DIR):
    for fname in files:
        if fname.startswith("."):
            continue
        stem = os.path.splitext(fname)[0]
        title_part = stem.split(" - ")[0] if " - " in stem else stem
        key = normalize(title_part)
        chart_index[key] = os.path.join(root, fname)

print(f"Found {len(chart_index)} charts\n")

with open(TRACKER_JSON) as f:
    data = json.load(f)
songs = data["songs"] if isinstance(data, dict) else data

matched = 0
for song in songs:
    key = normalize(song["title"])
    if key in chart_index:
        path = chart_index[key]
        song["chart"] = "file://" + urllib.parse.quote(path)
        print(f"  MATCHED: {song['title']} → {os.path.basename(path)}")
        matched += 1
    elif "chart" not in song:
        song["chart"] = None

print(f"\n{matched} of {len(songs)} songs matched")

with open(OUTPUT_JSON, "w") as f:
    json.dump(songs, f, indent=2)

print(f"Saved → {OUTPUT_JSON}")
