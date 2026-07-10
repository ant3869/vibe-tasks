# Move Mission Control

A mobile-first Three.js moving dashboard. Boxes physically travel from the old place, into the truck, and into their destination room as you update each stage.

## What it does

- 3D old-place → truck → duplex move map
- Tap boxes to change their stage
- Room-specific task tracking
- “What now?” task picker based on priority and effort
- 15-minute moving sprints
- Add custom tasks and boxes
- Browser-local saving
- JSON backup, sharing, and restore

## Run it on a phone

### Easiest permanent option: GitHub Pages

1. Create a repository and put `index.html` at its root.
2. In GitHub: **Settings → Pages → Deploy from branch → main / root**.
3. Open the Pages URL on your phone.
4. Use the browser menu and choose **Add to Home screen**.

### Run it from your PC on the same Wi-Fi

From the folder containing `index.html`:

```powershell
python -m http.server 8080
```

Find the PC's local IPv4 address:

```powershell
ipconfig
```

On the phone, open:

```text
http://YOUR-PC-IP:8080
```

Example:

```text
http://192.168.1.50:8080
```

## Notes

- The app loads Three.js and OrbitControls from public CDNs. When hosted over HTTPS, its service worker caches the app and libraries for later offline launches.
- Move data is stored in the browser's local storage.
- Use **⋯ → Download backup** before clearing browser data or switching phones.
