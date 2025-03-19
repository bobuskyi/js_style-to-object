'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((line) => line.trim())
    .reduce((cssObject, line) => {
      const [property, value] = line.split(':').map((part) => part.trim());

      cssObject[property] = value;

      return cssObject;
    }, {});

  return styles;
}

module.exports = convertToObject;
