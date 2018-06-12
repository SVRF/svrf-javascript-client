# SvrfApi.MediaApi

All URIs are relative to *https://api.svrf.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vrIdGet**](MediaApi.md#vrIdGet) | **GET** /vr/{id} | Media by ID Endpoint
[**vrSearchGet**](MediaApi.md#vrSearchGet) | **GET** /vr/search | Search Endpoint
[**vrTrendingGet**](MediaApi.md#vrTrendingGet) | **GET** /vr/trending | Trending Endpoint


<a name="vrIdGet"></a>
# **vrIdGet**
> SingleMediaResponse vrIdGet(id)

Media by ID Endpoint

Fetch media by its ID.

### Example
```javascript
var SvrfApi = require('svrf_api');
var defaultClient = SvrfApi.ApiClient.instance;

// Configure API key authorization: XAppToken
var XAppToken = defaultClient.authentications['XAppToken'];
XAppToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//XAppToken.apiKeyPrefix = 'Token';

var apiInstance = new SvrfApi.MediaApi();

var id = "id_example"; // String | ID of Media


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vrIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of Media | 

### Return type

[**SingleMediaResponse**](SingleMediaResponse.md)

### Authorization

[XAppToken](../README.md#XAppToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vrSearchGet"></a>
# **vrSearchGet**
> SearchMediaResponse vrSearchGet(q, opts)

Search Endpoint

The SVRF Search Endpoint brings the power of immersive search found on [SVRF.com](https://www.svrf.com) to your app or project. SVRF&#39;s search engine enables your users to instantly find the immersive experience they&#39;re seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality content and most prevalent search results are returned. 

### Example
```javascript
var SvrfApi = require('svrf_api');
var defaultClient = SvrfApi.ApiClient.instance;

// Configure API key authorization: XAppToken
var XAppToken = defaultClient.authentications['XAppToken'];
XAppToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//XAppToken.apiKeyPrefix = 'Token';

var apiInstance = new SvrfApi.MediaApi();

var q = "q_example"; // String | Url-encoded search query

var opts = { 
  'type': "type_example", // String | The type of Media to be returned
  'stereoscopicType': "stereoscopicType_example", // String | Search only for Media with a particular stereoscopic type
  'size': 56, // Number | The number of results to return per-page, from 1 to 100 default: 10
  'pageNum': 56 // Number | Pagination control to fetch the next page of results, if applicable
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vrSearchGet(q, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Url-encoded search query | 
 **type** | **String**| The type of Media to be returned | [optional] 
 **stereoscopicType** | **String**| Search only for Media with a particular stereoscopic type | [optional] 
 **size** | **Number**| The number of results to return per-page, from 1 to 100 default: 10 | [optional] 
 **pageNum** | **Number**| Pagination control to fetch the next page of results, if applicable | [optional] 

### Return type

[**SearchMediaResponse**](SearchMediaResponse.md)

### Authorization

[XAppToken](../README.md#XAppToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vrTrendingGet"></a>
# **vrTrendingGet**
> TrendingResponse vrTrendingGet(opts)

Trending Endpoint

The SVRF Trending Endpoint provides your app or project with the hottest immersive content curated by real humans. The experiences returned mirror the [SVRF homepage](https://www.svrf.com), from timely cultural content to trending pop-culture references. The trending experiences are updated regularly to ensure users always get fresh updates of immersive content.

### Example
```javascript
var SvrfApi = require('svrf_api');
var defaultClient = SvrfApi.ApiClient.instance;

// Configure API key authorization: XAppToken
var XAppToken = defaultClient.authentications['XAppToken'];
XAppToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//XAppToken.apiKeyPrefix = 'Token';

var apiInstance = new SvrfApi.MediaApi();

var opts = { 
  'size': 56, // Number | The number of results per page.
  'nextPageCursor': "nextPageCursor_example" // String | Pass this cursor ID to get the next page of results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vrTrendingGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of results per page. | [optional] 
 **nextPageCursor** | **String**| Pass this cursor ID to get the next page of results. | [optional] 

### Return type

[**TrendingResponse**](TrendingResponse.md)

### Authorization

[XAppToken](../README.md#XAppToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

