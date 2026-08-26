Dimension by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Dimension, a fun little one-pager with modal-ized (is that a word?) "pages"
and a cool depth effect (click on a menu item to see what I mean). Simple, fully
responsive, and kitted out with all the usual pre-styled elements you'd expect.
Hope you dig it :)

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Responsive Tools (github.com/ajlkn/responsive-tools)
## Updating Work and Skills Data

Edit `data/work.json` or `data/skills.json` to update portfolio content. Each project and skill has a `published` key: set it to `false` to hide that item, or `true` to show it. For deployments served through HTTP/HTTPS, the page reads those JSON files directly. To keep a locally opened `index.html` (`file://`) in sync, regenerate its browser-safe fallback after editing data:

```bash
node scripts/generate-content-fallback.js
```

Browsers block `fetch()` of local JSON files from `file://` pages as a security policy. The generated fallback allows the portfolio to work when opened directly; alternatively, serve the project locally with `python3 -m http.server` to read the JSON files directly.
