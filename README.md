# browserslist-config-tao

Shareable _Browserslist_ for TAO

## Usage

This configuration can be used by all the tools that supports [browserslist](https://github.com/browserslist/browserslist) : Babel, Autoprefixer, eslint-plugin-compat, etc.

Add this package in your dependencies : 

```
npm install --save-dev @oat-sa/browserslist-config-tao
```

Then in your `package.json` :
```js
{
    "browserslist" : [
        "extends @oat-sa/browserslist-config-tao"
    ]
}
```

## Display the supported browsers

From this repository : 
```
npm run browserslist
```

From your repository : 

```
npx browserslist
```

## Custom browsers (non-Browserslist clients)

Some supported TAO clients (for example lockdown browsers) are listed in `custom-browsers.js`.
They are not part of the shareable Browserslist query in `index.js`, so tools using `extends @oat-sa/browserslist-config-tao` are unaffected.

The [browserslist-app-tao](https://github.com/oat-sa/browserslist-app-tao) API merges this list when generating `api.json`.
