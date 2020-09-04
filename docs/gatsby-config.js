module.exports = {
  siteMetadata: {
    title: 'Simple Translator',
    description: 'Simple translation in pure JavaScript.',
    author: 'Andreas Remdt',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: ['gatsby-remark-prismjs', 'gatsby-remark-slug'],
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
