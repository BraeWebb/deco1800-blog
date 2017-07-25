var markdown = require("markdown");

highlight = require("highlight.js");

/**
 * Takes some content (string) in markdown format and
 * converts it into HTML, complete with code hightlighting!
 *
 * @param {String} string
 * @return {String} formatted
 */
var format = function (string) {
    // Use the markdown library to convert to HTML.
    var formatted = markdown.markdown.toHTML(string);

    // Find the code sections of the formatted result.
    var originals = formatted.match(/<code>((\S|\s)*?)<\/code>/g);
    var code = string.match(/```((\S|\s)*?)```/g);

    if (code) {
        for (var c in code) {
            var original = originals[c];
            // Remove encapsulating markers.
            var newCode = code[c].replace(/```/g, "");
            // Highlight the code with HTML.
            newCode = highlight.highlightAuto(newCode).value;
            // Wrap in a <pre> bow.
            newCode = "<pre class='code'>" + newCode + "</pre>";

            formatted = formatted.replace(original, newCode);
        }
    }

    return formatted;
};

module.exports = format;