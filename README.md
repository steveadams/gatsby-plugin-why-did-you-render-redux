# gatsby-plugin-why-did-you-render-redux

Include the [@welldone-software/why-did-you-render](https://github.com/welldone-software/why-did-you-render) library when running `gatsby develop`. It includes support for tracing `useSelector` in your redux store.

## Installation

Using npm:

```
npm i gatsby-plugin-why-did-you-render-redux
```

Using yarn:

```
yarn add gatsby-plugin-why-did-you-render-redux
```

## How To Use

This plugin allows for all [options](https://github.com/welldone-software/why-did-you-render#options) available in [@welldone-software/why-did-you-render](https://github.com/welldone-software/why-did-you-render), and you can use them the same way.

An additional option is added called `trackUseSelector`, which specifically targets tracing redux selectors as it requires a special step to configure. This means you don't need to add `useSelector` to `trackExtraHooks`.

You can set it up in your Gatsby project by adding it to `gatsby-config.js` like this:

```javascript
{
  // ...
  plugins: [
    {
      resolve: 'gatsby-plugin-why-did-you-render-redux',
      options: {
        trackAllPureComponents: true,
        trackHooks: true,
        trackUseSelector: true,
      },
    },
    // ...
  ],
  // ...
}
```

```javascript
{
  // ...
  plugins: [
    {
      resolve: 'gatsby-plugin-why-did-you-render-redux',
      options: {
        include: [new RegExp(/MyComponent/), new RegExp(/MyOtherComponent/)]
      },
    },
    // ...
  ],
  // ...
}
```
