module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Blog by Marat Dospolov',
  keywords:
    'account surfer, trello bookmark, trello, productivity, javascript, Marat Dospolov, choosy windows, browser selector',
  subtitle: 'Developer. Optimizer. Learner.',
  copyright: '© 2020 | Cancun, Mexico',
  disqusShortname: 'dospolov',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-6589522-7',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'CV',
      path: '/cv'
    }
  ],
  author: {
    name: 'Max Barrera',
    photo: '/photo.jpg',
    bio: 'Marketer. Optimizer. Learner.',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'dospolov',
      twitter: 'marat_dospolov',
      linkedin: 'dospolov',
      telegram: 'dospolov',
      instagram: 'dospolov',
      facebook: 'dospolov',
      email: '',
      rss: '/rss.xml'
    }
  }
}
