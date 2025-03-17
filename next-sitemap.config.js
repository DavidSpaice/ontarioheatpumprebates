/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ontarioheatpumprebates.ca", // CHANGE TO YOUR DOMAIN
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
