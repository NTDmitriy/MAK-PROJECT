/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    `https://${process.env.SITE_URL}` || "https://makeallperfect.ru",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: '/',
        disallow: [
          "/*?*",
          "/*&*",
          "/*=*",
          "/*utm_source*",
          "/*utm_medium*",
          "/*utm_campaign*",
          "/*utm_term*",
          "/*utm_content*",
          "/*ref*",
          "/*source*",
          "/*type*",
          "/*id*",
        ], 
      },
    ],
  },
};
