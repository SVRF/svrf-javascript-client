# SVRF.AuthenticateApi

All URIs are relative to *https://api.svrf.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](AuthenticateApi.md#authenticate) | **POST** /app/authenticate | Authenticate application


<a name="authenticate"></a>
# **authenticate**
> AuthResponse authenticate(body)

Authenticate application

Authenticate an application&#39;s SVRF API Key to retrieve an access token to the SVRF API.

### Example
```javascript
var SVRF = require('svrf-client');

var apiInstance = new SVRF.AuthenticateApi();

var body = new SVRF.Body(); // Body | 

apiInstance.authenticate(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

