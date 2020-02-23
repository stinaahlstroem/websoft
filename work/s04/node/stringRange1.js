/**
 * A collection of useful functions.
 *
 * @author Mitt Namn
 */
"use strict";

module.exports = {
    "stringRange": stringRange
};

/**
 * Return the range between a and b as a string, separated by commas.
 *
 * @param {integer} a   Start value.
 * @param {integer} b   Last included value.
 * @param {string}  sep Separator, defaults to ", ".
 *
 * @returns {string} A comma separated list of values.
 */
function stringRange(a, b, sep = ", ") {
    let res = "";
    let i = a;

    while (i < b) {
        res += i + sep;
        i++;
    }

    res = res.substring(0, res.length - sep.length);
    return res;
}

