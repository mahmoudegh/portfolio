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

Edit `data/work.json` or `data/skills.json` to update portfolio content. Each project and skill has a `published` key: set it to `false` to hide that item, or `true` to show it.
The number beside each Work filter is calculated from the published projects in `data/work.json`, so it updates automatically when projects are added, removed, published, or hidden.

The data files are valid JSON and are loaded with `fetch()`. Browsers intentionally block `fetch()` requests to local files when `index.html` is opened directly with `file://`; this cannot be enabled by website JavaScript.

### Run locally

Do **not** double-click `index.html`. Start the included local server instead, then open the displayed address:

- **Windows:** double-click `start-server.bat` (or run `start-server.bat` in Command Prompt). It opens `http://localhost:8000` automatically.
- **macOS/Linux:** run `./start-server.sh`, then open `http://localhost:8000`.

After changing either JSON file, refresh the browser page. The Work and Skills sections will immediately use the updated data.
