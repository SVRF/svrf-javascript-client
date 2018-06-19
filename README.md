# svrf-client - the JavaScript client library for the SVRF API

For more information, please visit [https://github.com/svrf/svrf-api](https://github.com/svrf/svrf-api)

## Getting Started

SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.

The SVRF API Documentation is available at <https://developers.svrf.com>.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install svrf-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SVRF = require('svrf-client');

var api = new SVRF.AuthenticateApi()

var body = new SVRF.Body(); // {Body} 

api.appAuthenticatePost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.svrf.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SVRF.AuthenticateApi* | [**appAuthenticatePost**](docs/AuthenticateApi.md#appAuthenticatePost) | **POST** /app/authenticate | Authenticate application
*SVRF.MediaApi* | [**vrIdGet**](docs/MediaApi.md#vrIdGet) | **GET** /vr/{id} | Media by ID Endpoint
*SVRF.MediaApi* | [**vrSearchGet**](docs/MediaApi.md#vrSearchGet) | **GET** /vr/search | Search Endpoint
*SVRF.MediaApi* | [**vrTrendingGet**](docs/MediaApi.md#vrTrendingGet) | **GET** /vr/trending | Trending Endpoint


## Documentation for Models

 - [SVRF.APIKey](docs/APIKey.md)
 - [SVRF.Body](docs/Body.md)
 - [SVRF.ErrorResponse](docs/ErrorResponse.md)
 - [SVRF.Media](docs/Media.md)
 - [SVRF.MediaFiles](docs/MediaFiles.md)
 - [SVRF.MediaImages](docs/MediaImages.md)
 - [SVRF.MediaStereo](docs/MediaStereo.md)
 - [SVRF.MediaVideos](docs/MediaVideos.md)
 - [SVRF.SuccessResponse](docs/SuccessResponse.md)
 - [SVRF.AuthResponse](docs/AuthResponse.md)
 - [SVRF.RateLimitResponse](docs/RateLimitResponse.md)
 - [SVRF.SearchMediaResponse](docs/SearchMediaResponse.md)
 - [SVRF.SingleMediaResponse](docs/SingleMediaResponse.md)
 - [SVRF.TrendingResponse](docs/TrendingResponse.md)


## Documentation for Authorization


### XAppToken

- **Type**: API key
- **API key parameter name**: x-app-token
- **Location**: HTTP header

