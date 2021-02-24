module.exports = function(eleventyConfig) {
    // Output directory: _site

    // Copy `static/` to `_site/static`
    // If you use a subdirectory, it’ll copy using the same directory structure.
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");


    return {
        dir: {
            // includes: "_includes",
            layouts: "_layouts",
            data: "_data",
        }
    };
};
