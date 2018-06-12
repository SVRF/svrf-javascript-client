# SvrfApi.AuthenticateApi

All URIs are relative to *https://api.svrf.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appAuthenticatePost**](AuthenticateApi.md#appAuthenticatePost) | **POST** /app/authenticate | Authenticate application


<a name="appAuthenticatePost"></a>
# **appAuthenticatePost**
> AuthResponse appAuthenticatePost(body)

Authenticate application

Authenticate an application&#39;s SVRF API Key to retrieve an access token to the SVRF API.

### Example
```javascript
var SvrfApi = require('svrf_api');

var apiInstance = new SvrfApi.AuthenticateApi();

var body = new SvrfApi.Body(); // Body | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appAuthenticatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

