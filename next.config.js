const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN", "es-ES", "pt-BR", "ja", "ko", "ru"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [];
  },
});
