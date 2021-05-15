'use-strict'

const expect = require('chai').expect
const { responseMapper } = require('../../api/util/object-mapper')
const scrappedMetadata = require('../resources/ogs-response.json')

describe('map the source object acc. the required format', () => {
    let mappedResponse = null;

    before(async () => {
        mappedResponse = await responseMapper(scrappedMetadata)
    });

    describe('get the open graph params & values from a given url', () => {
        it('should match ogTitle of scrappedMetadata from the mappedResponse', () => {
            expect(mappedResponse.title).to.be.equal(scrappedMetadata.ogTitle)
        })

        it('should match ogDescription of scrappedMetadat from the mappedResponse', () => {
            expect(mappedResponse.description).to.be.equal(scrappedMetadata.ogDescription)
        })
    })

})