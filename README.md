# browserlist-config-tao

Shareable _Browserslist_ for TAO

## Usage

This configuration can be used by all the tools that supports [browserslist](https://github.com/browserslist/browserslist) : Babel, Autoprefixer, eslint-plugin-compat, etc.

Add this package in your dependencies : 

```
npm install --save-dev @oat-sa/browserlist-config-tao
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
