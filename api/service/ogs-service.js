"use strict"
const ogs = require('open-graph-scraper')

/**
 * This service method accepts a url as an input. 
 * The input url will be provided to ogs library method, og metadata is expected as response.
 * OG response will be run through a object mapper utility to have the response in a desired format.
 * 
 * library - https://www.npmjs.com/package/open-graph-scraper
 * @param {*} url 
 * @returns 
 */
exports.scrape = async (url) => {
  try {
    const options = { url: url }
    const { result } = await ogs(options)
    return result
  } catch (error) {
    console.error('error response received from ogs ', error)
    throw error
  }
}