import theme from "@nuxt/content-theme-docs";

export default theme({
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
});
