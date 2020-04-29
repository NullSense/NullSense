const path = require("path");

module.exports = {
  siteMetadata: {
    site: `NullSense`,
    title: `NullSense`,
    titleTemplate: `%s - Developer`,
    description: `Developer`,
    siteUrl: `https://NullSense.dev/`,
    language: `en`,
    color: `#1a1b1e`,
    twitter: "NullSense",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.tsx`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
