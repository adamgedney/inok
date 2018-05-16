var Inflector = require('inflector-js');

/**
 * Fn Index: 
 *  string_capFirstLetter
 *  string_validate
*/

/**
 * Just captializes the first letter of a string
 * @param string
 * @returns {string}
 */
export const string_capFirstLetter = string =>
  string
    .charAt(0)
    .toUpperCase()
  + string.slice(1);

/**
 * Just lowercase the first letter of a string
 * @param string
 * @returns {string}
 */
export const string_lowerCaseFirstLetter = string =>
  string
    .charAt(0)
    .toLowerCase()
  + string.slice(1);

/**
 * Validates a string against a regex pattern
 * @param str
 * @param regEx
 * @returns {boolean}
 */
export const string_validate = (str, regEx) => {
  const patt = new RegExp(regEx);

  return patt.test(str);
};

/**
 * Make an english string singular
 * @param str
 * @returns {boolean}
 */
export const string_makeSingular = str => Inflector.singularize(str);

/**
 * Adds an English string plural
 * @param str
 * @returns {boolean}
 */
export const string_makePlural = str => Inflector.pluralize(str);
