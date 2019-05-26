module.exports = {
  siteMetadata: {
    title: `React Sled`,
    siteUrl: `https://andreasfaust.github.io/react-sled/`,
    description: `react-sled is a carousel made with react-spring.`
  },
  pathPrefix: `/gatsby-plugin-transitions`,
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          'src/components',
          'src/layout',
          'src/transitions'
        ]
      }
    }
  ]
}
