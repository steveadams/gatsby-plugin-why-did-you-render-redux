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

This plugin allows for all [options](https://github.com/welldone-software/why-did-you-render#options) except for the non-primitive values `include`, `exclude`, and `notifier`. It'll be possible to add `include` and `exclude` in time, but not `notifier`. For most use cases, this is fine.

An additional option is added called `trackUseSelector`, which specifically targets tracing redux selectors as it requires a special step to configure. This means you don't need to add `useSelector` to `trackExtraHooks`.

You can set it up in your Gatsby project by adding it to `gatsby-config.js` like this:

```javascript
{
  // ...
  plugins: [
    {
      resolve: 'gatsby-plugin-why-did-you-render-redux',
      options: {
        logOwnerReasons: true,
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
