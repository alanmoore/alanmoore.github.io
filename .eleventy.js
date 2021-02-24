module.exports = function(eleventyConfig) {

    // pause to allow Codekit to do its thing
    eleventyConfig.setWatchThrottleWaitTime(2000);

    // Watch the /scss folder for changes
    eleventyConfig.addWatchTarget("./css/");
    eleventyConfig.addWatchTarget("./scss/");


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
            data: "_data"
        }
    };
};
