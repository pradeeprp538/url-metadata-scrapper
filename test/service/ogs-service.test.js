"use strict"

const expect = require('chai').expect
const ogsService = require('../../api/service/ogs-service')

describe('test open graph scraper library method', () => {
    let scrapedResponse = null;

    describe('get the open graph params & values from a given url', () => {
        it('should return the scraped response with the success flag set to true', async () => {
            const url = 'https://www.amazon.in/'
            scrapedResponse = await ogsService.scrape(url)
            expect(scrapedResponse.success).to.be.true
        })

        it('should throw an error with success flag set to false; when provided a wrong url', async () => {
            try {
                const url = 'https://www.amazon.in/nopath'
                scrapedResponse = await ogsService.scrape(url)
            } catch (error) {
                expect(error.result.success).to.be.false
            }
        })
    })

})