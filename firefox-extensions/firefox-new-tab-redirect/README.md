README.md

Any website in New Tab 

How it works: when you open a new tab, the extension creates a new tab with the specified website address and closes the current one (redirect)

Broken functionality: when selected "Bookmarks Toolbar -> Only Show on New Tab" that not showing, because opened extension in new tab make redirect (creating a new tab) and immediately closed. One solution: Bookmarks Toolbar -> Always Show.

main code:
<!-- code -->
```javascript
// second 2 redirect
//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
browser.tabs.create({
url: rUrl
});
window.close();
//rUrl - redirect url
```

Screenshots:
![screenshot](screenshot.png)
![screenshot2](screenshot2.png)
![screenshot3](screenshot3.png)





