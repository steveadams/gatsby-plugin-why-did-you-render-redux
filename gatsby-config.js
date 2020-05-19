module.exports = {
  assetPrefix: `/hashed/${process.env.GATSBY_BUILD_TIME}` /* must match GATSBY_BUILD_TIME Makefile! */,
  siteMetadata: {
    siteUrl: `https://instantdomainsearch.com`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-linaria',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/errors/*'],
      },
    },
    'gatsby-transformer-javascript-frontmatter',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/pages/articles/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-983723-4',
        head: false,
        anonymize: true,
        // optimizeId: 'GTM-T3MZ8WV',
        // experimentId: 'Xee7fJz8RKKgYb1TsDrt0g',
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
      },
    },
    {
      resolve: `gatsby-plugin-rollbar`,
      options: {
        hostWhiteList: ['instantdomainsearch.com'],
        accessToken: '7511ab277ae146108cbca47113090050',
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: 'production',
          client: {
            javascript: {
              code_version: process.env.GATSBY_BUILD_TIME,
              source_map_enabled: true,
              guess_uncaught_frames: true,
            },
          },
        },
      },
    },
  ],
};
