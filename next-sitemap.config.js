/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.SITE_URL}` || "https://makeallperfect.ru",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
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
  // Вывод всех автоматически генерируемых путей
  transform: async (config, path) => {
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }

    else if (path.split('/').length === 2) {
      priority = 0.9;
      changefreq = 'daily';
    }

    else if (path.split('/').length === 3) {
      priority = 0.8;
      changefreq = 'daily';
    }

    return {
      loc: path, 
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
