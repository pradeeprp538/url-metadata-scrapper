'use strict';

const { scrape } = require('./service/ogs-service')
const { responseMapper } = require('./util/object-mapper')

module.exports.scraper = async (event) => {
 try {
  const body = JSON.parse(event.body)
  const url = body.url
  
  /**
   *  get the open graph params out of the url provided
   */
  let scrapedMetadata = await scrape(url)

  /**
   * Build the response in the desired format
   */
  scrapedMetadata = responseMapper(scrapedMetadata)

  return {
    statusCode: 200,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(scrapedMetadata)
  }
 } catch (error) {
   console.error('error: ', error)
   return {
     statusCode : 500,
     headers: {
         "Content-Type": "application/json"
     },
     body : JSON.stringify({message : error})
   }
 }
};