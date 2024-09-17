/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://test.makeallperfect.ru',
  generateRobotsTxt: true, 
  sitemapSize: 7000, 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', 
        // disallow: '/', 
        allow: '/'
      },
    ],
  },
}
