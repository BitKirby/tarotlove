/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://tarotlove.store/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
