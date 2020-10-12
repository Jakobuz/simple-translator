module.exports = {
  siteMetadata: {
    title: 'Simple Translator',
    description:
      'A guide to using Simple Translator, a pure JavaScript library.',
    author: 'Andreas Remdt',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
}
