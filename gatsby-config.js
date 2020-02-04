module.exports = {
  siteMetadata: {
    title: `AADHum`,
    description: `African American History, Culture and Digital Humanities`,
    author: `MITH`,
    menuLinks: [
      {
        name: 'Our Values',
        links: [
          {
            name: 'Code of Conduct',
            href: '/values/conduct/'
          },
          {
            name: 'Vision',
            href: '/values/vision/'
          }
        ]
      },
      {
        name: 'Research',
        links: [
          {
            name: 'Restorative Justice Project',
            href: '/research/restorative-justice/'
          },
          {
            name: 'Black DH Practices',
            href: '/research/black-dh/'
          }
        ]
      },
      {
        name: 'Programs + Events',
        links: [
          {
            name: 'AADHUM Scholars',
            href: '/programs/scholars/'
          },
          {
            name: 'Seminars and Workshops',
            href: '/programs/seminars/'
          },
          {
            name: 'Open Studios',
            href: '/programs/open-studio/'
          },
          {
            name: 'Summer Research',
            href: '/programs/summer-research/'
          },
          {
            name: 'Elevate Fellowship',
            href: '/programs/elevate/' 
          },
          {
            name: 'Conference',
            href: '/programs/conference/'
          }
        ]
      },
      {
        name: `News`,
        links: [
          {
            name: 'Blog',
            href: '/news/blog/'
          },
          {
            name: 'Bulletins',
            href: '/news/bulletins/'
          }
        ]
      },
      {
        name: `Contact`,
        links: [
          {
            name: 'AADHum Online',
            href: '/contact/aadhum-online/'
          },
          {
            name: 'Social',
            href: '/contact/social/'
          },
          {
            name: 'Email',
            href: '/contact/email/'
          },
          {
            name: 'Mailing List',
            href: '/contact/mailing-list/'
          }
        ]
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
