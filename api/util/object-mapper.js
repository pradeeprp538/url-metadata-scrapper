const objectMapper = require('object-mapper')

/**
 * A utility method which accepts a json object as input;
 * Builds a response object from the input provided with the help of below schema/map.
 * 
 * library - https://www.npmjs.com/package/object-mapper
 * @param {*} input 
 * @returns 
 */
exports.responseMapper = (input) => {
    const map = {
        ogTitle : 'title',
        ogDescription : 'description',
        'ogImage.url' : 'images[]',
        ogLocale : 'locale',
        ogUrl : 'url'
    }
    const mappedResponse = objectMapper(input, map)
    return mappedResponse
}