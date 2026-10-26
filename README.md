# Molecule Mission

A browser-based science game about the states of matter.

Build a human explorer with a chosen skin tone, hairstyle, and suit color. Walk
around the interactive lab with the arrow keys or on-screen controls, talk to
Nova, scan molecules, and earn wearable mission clothes. The explorer and
narrator are animated 3D characters, and character creation includes a live 3D
preview. Missions track temperature, molecule scans, and sample confirmation as
you work. The narrator offers subtitles and an optional, more natural-paced
browser voice. The existing game QR code shares the same page with other players.

The explorer and narrator are real, animated 3D characters rendered with
WebGL, with idle, walking, and waving animations. The game loads a pinned Three.js
build from cdnjs, so full 3D graphics require an internet connection and a
browser with WebGL enabled; illustrated character fallbacks remain available
when 3D cannot load.

Use the arrow keys to walk, **E** to interact with Nova or the scanner, and
**W/A/S/D** to select molecules when the molecule display is focused.

## Deploy with GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` deploys the
site whenever a change is pushed to `main`, or when the workflow is run manually.

To publish the site:

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages** and set the build and deployment
   source to **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages** and run the workflow, or push a
   change to `main`.
4. Once deployment succeeds, GitHub Pages shows the site URL under
   **Settings → Pages**. It will usually be
   `https://<owner>.github.io/<repository>/`.

Anyone with the Pages URL can visit the game. The QR-code feature sends that URL
to an external QR image service to generate the code.