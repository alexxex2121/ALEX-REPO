# Deepak Vishwakarma — Computer Educator Portfolio

A responsive, modern portfolio website made with plain HTML, CSS, and JavaScript. No framework, build command, or coding knowledge is required to publish it on GitHub Pages.

## Files
- `index.html` — page content, menu items, sections, email, gallery tiles.
- `styles.css` — colours, layout, typography, responsive/mobile design.
- `script.js` — mobile navigation, current year, copy-email button.
- `assets/` — place your own profile photo and gallery photos here.

## Before publishing
1. Open `index.html`.
2. Search for `your.email@example.com` and replace it with your real email address in the `mailto:` link.
3. Update the sample project cards and contact details with your own information.
4. Add your profile picture at `assets/profile.jpg` if you want a real portrait. The current hero card is a designed placeholder, not a real photo.
5. Replace gallery tiles with your own pictures if desired. See the guide below.

## Add a profile photo
Create an `assets` folder in the same location as `index.html`, then add your photo as `profile.jpg`. In `index.html`, replace the `<div class="portrait-placeholder" id="profilePhoto"> ... </div>` block with:

```html
<div class="portrait-placeholder">
  <img src="assets/profile.jpg" alt="Deepak Vishwakarma" style="width:100%;height:100%;object-fit:cover;border-radius:16px">
</div>
```

## Add photos to the gallery
Put image files inside `assets/`. You can replace a gallery tile in `index.html` with this pattern:

```html
<div class="gallery-tile" style="background-image:linear-gradient(0deg,#0d1023dd,transparent),url('assets/classroom.jpg');background-size:cover;background-position:center">
  <div><small>01 / CLASSROOM</small><b>Learning together</b></div>
</div>
```

Change `classroom.jpg` and the caption to match your photo. Use images you have permission to publish, and avoid sharing students' identifiable photos without the school's/parents' permission.

## Publish on GitHub Pages (free)
1. Sign in to GitHub and choose **New repository**.
2. Give it a name such as `deepak-portfolio`. For a public portfolio, choose **Public**.
3. Upload the files and folders from this ZIP. Make sure `index.html`, `styles.css`, and `script.js` are in the repository's top level (not buried inside another folder).
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then click **Save**.
7. Wait a few minutes. GitHub Pages will show your live website link on the Pages screen.
8. Whenever you want to update the site, edit a file on GitHub or upload its replacement and commit the change. The published site updates automatically after GitHub Pages rebuilds.

## Important
- This is a static website, so it does not need a server, database, account system, or secret API keys.
- Do not put passwords, private student records, or confidential school documents in a public repository.
- Resources can be linked to files stored in this repository, but remember that public files can be viewed by anyone.
