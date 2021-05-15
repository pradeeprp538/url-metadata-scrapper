<!--
title: 'URL-SCRAPER'
description: 'This lambda api function demonstrates how to scrape open graph values from a web page URL. Once you ping it with a URL, it will reply with the open graph metadata.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/pradeeprp538'
authorName: 'Pradeep Raju'
-->
# URL Metadata Scrapper

This lambda api function example demonstrates how to scrape open graph values from a web page URL. Once you ping it with a URL, it will reply with the open graph metadata.'

## Use Cases

- scrape a given web URL

## Invoke the function locally

```bash
serverless invoke local --function scrape
```

Which should result in:

```bash

{
    "title": "open-graph-scraper",
    "description": "Node.js scraper module for Open Graph and Twitter Card info",
    "images": [
        "https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
    ],
    "locale": "en",
    "url": "https://www.npmjs.com/package/open-graph-scraper"
}
```

## Deploy

In order to deploy the endpoint, simply run:

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service metadata-scrapping.zip file to S3 (4.44 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
................
Serverless: Stack update finished...
Service Information
service: metadata-scrapping
stage: dev
region: us-east-1
stack: metadata-scrapping-dev
resources: 11
api keys:
  None
endpoints:
  POST - https://4d3kxv82zb.execute-api.us-east-1.amazonaws.com/url-metadata-scraping
functions:
  scrape: metadata-scrapping-dev-scrape
layers:
  None
```

## Usage

or as send an HTTP request directly to the endpoint using a tool like curl

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/url-metadata-scraping
```

## Unit Tests

you can run the unit test locally with the command as below

```bash
mocha ./test/*/*.js --timeout 20000
```

## Test Coverage

you can know the test case coverage with the command as below

```bash
nyc mocha ./test/*/*.js --timeout 20000
```