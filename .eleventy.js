module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.setBrowserSyncConfig({
    files: "./public/css/**/*.css",
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
