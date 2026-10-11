# Muthukumar & Shri Sumugi — Wedding Countdown

A responsive, static wedding countdown website in a South Indian traditional maroon-and-gold style. No framework, build process, server, or paid hosting required.

## Event configuration

- Couple: Muthukumar & Shri Sumugi
- Date: Thursday, 25 February 2027
- Time: 6:00 PM India Standard Time (IST, UTC+05:30)
- Venue: Placeholder text for now

The date and time are configured in `script.js` as `2027-02-25T18:00:00+05:30`.

## Add your own photos

1. Open the `assets` folder.
2. Add your couple photos and name them exactly:
   - `couple-1.jpg`
   - `couple-2.jpg`
3. Use JPG images for those filenames. For best results, use portrait or vertical photos.
4. The photo placeholders automatically disappear when those files are present.

If you prefer different filenames, update the two `src` values in `index.html`.

## Update venue details

Edit the venue card in `index.html`. Search for `Venue details will be shared soon.` and replace the placeholder with the wedding venue and address. You can add a Google Maps link if desired.

## Preview locally

Double-click `index.html` to open it in a browser. The countdown runs in the browser and uses the visitor's current device clock.

## Publish free with GitHub Pages (phone or computer)

1. Sign in to [GitHub](https://github.com/).
2. Create a new **public** repository named `muthukumar-shri-sumugi-countdown` (or another name you like).
3. Unzip this project on your device.
4. Upload the contents of the project folder to the repository root. Ensure `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder are at the root level—not inside an extra nested folder.
   - On GitHub, use **Add file → Upload files**. Drag/select the files and folder, then commit the changes.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
7. Choose branch **main** and folder **/(root)**, then click **Save**.
8. Wait a few minutes. The Pages section will show the published website URL, usually:
   `https://YOUR-GITHUB-USERNAME.github.io/muthukumar-shri-sumugi-countdown/`
9. Open the URL on your phone and share it with family and friends.

GitHub Pages on GitHub Free requires a public repository. The published website is public too, so only upload photos you are comfortable sharing publicly.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Customize the look

- Colors, typography, spacing and responsive layout: `style.css`
- Names, date display, photo labels, blessing and venue: `index.html`
- Countdown date/time: `script.js`

The site uses Google Fonts when online; it has sensible fallback fonts if Google Fonts cannot load.
