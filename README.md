# Molecule Mission

A browser-based science game about the states of matter.

The main menu offers four different games from the same page and QR code:
the 3D Lab Adventure, Rapid-Fire Matter Quiz, Thermal Target Sprint, and
Molecule Memory Match. The mini-games are quick to play; the lab adventure
saves its progress on the device.

Build a human explorer with a chosen skin tone, hairstyle, and suit color. Drag
the 3D preview to turn your character, then walk around the interactive lab with
the arrow keys or on-screen controls, talk to Nova, scan molecules, and earn
wearable mission clothes. Each completed lab mission also awards science
credits for in-game cosmetics in the character shop. The shop includes previews
of physical character merchandise, but checkout, payment, and shipping are not
connected.

The narrator has woman/man presentation and voice options, subtitles, and an
optional browser voice. Which spoken voices are available depends on the
player's browser and device.

The explorer and narrator are real, animated 3D characters rendered with
WebGL, with idle, walking, and waving animations. The game loads a pinned Three.js
build from cdnjs, so full 3D graphics require an internet connection and a
browser with WebGL enabled; illustrated character fallbacks remain available
when 3D cannot load. Walking and talking to the characters are available in the
lab; the preview can be rotated with a drag gesture or the left/right arrow keys.

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

The QR code points to the site, not to an individual game or store. After
deploying changes, the same QR code opens the updated game menu and character
shop at the same address.