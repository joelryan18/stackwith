import { minify } from "html-minifier-terser";

export default function (eleventyConfig) {
  // hashed bundles (Task 4 populates dist-assets/)
  eleventyConfig.addPassthroughCopy({ "dist-assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/video": "assets/video" });
  eleventyConfig.addPassthroughCopy({ "src/assets/3d": "assets/3d" });

  // static files
  for (const f of ["src/og.png", "src/robots.txt", "src/ads.txt", "src/CNAME", "src/404.html"]) {
    eleventyConfig.addPassthroughCopy(f);
  }
  // The custom 404 stays verbatim; editorial pages are rendered by Eleventy.
  eleventyConfig.ignores.add("src/404.html");
  // assets are bundled/passthrough-copied, never templated (LICENSES.md would
  // otherwise be rendered into a stray HTML page)
  eleventyConfig.ignores.add("src/assets/**");

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("posts").sort((a, b) =>
      String(a.data.published).localeCompare(String(b.data.published))
    )
  );

  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));
  eleventyConfig.addFilter("xmlEscape", (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;"));

  eleventyConfig.addTransform("htmlmin", async function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      return minify(content, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        keepClosingSlash: true,
        minifyJS: false,
        minifyCSS: false,
      });
    }
    return content;
  });

  eleventyConfig.addWatchTarget("dist-assets");

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
