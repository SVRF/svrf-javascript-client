## Classes

<dl>
<dt><a href="#SvrfApiClient">SvrfApiClient</a></dt>
<dd><p>SVRF API provider</p>
</dd>
<dt><a href="#AuthApi">AuthApi</a></dt>
<dd><p>Authentication API provider</p>
</dd>
<dt><a href="#MediaApi">MediaApi</a></dt>
<dd><p>Media API provider</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ApiOptions">ApiOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Storage">Storage</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#HttpRequestParams">HttpRequestParams</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Media">Media</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#MediaFiles">MediaFiles</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SingleMediaApiResponse">SingleMediaApiResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#MultipleMediaApiResponse">MultipleMediaApiResponse</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="SvrfApiClient"></a>

## SvrfApiClient
SVRF API provider

**Kind**: global class  

* [SvrfApiClient](#SvrfApiClient)
    * [new SvrfApiClient(apiKey, [options])](#new_SvrfApiClient_new)
    * [.auth](#SvrfApiClient+auth) : [<code>AuthApi</code>](#AuthApi)
    * [.media](#SvrfApiClient+media) : [<code>MediaApi</code>](#MediaApi)

<a name="new_SvrfApiClient_new"></a>

### new SvrfApiClient(apiKey, [options])

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>String</code> | API Key |
| [options] | [<code>ApiOptions</code>](#ApiOptions) | API options |

<a name="SvrfApiClient+auth"></a>

### svrfApiClient.auth : [<code>AuthApi</code>](#AuthApi)
**Kind**: instance property of [<code>SvrfApiClient</code>](#SvrfApiClient)  
<a name="SvrfApiClient+media"></a>

### svrfApiClient.media : [<code>MediaApi</code>](#MediaApi)
**Kind**: instance property of [<code>SvrfApiClient</code>](#SvrfApiClient)  
<a name="AuthApi"></a>

## AuthApi
Authentication API provider

**Kind**: global class  

* [AuthApi](#AuthApi)
    * [new AuthApi(httpClient, tokenService, apiKey)](#new_AuthApi_new)
    * [.authenticate()](#AuthApi+authenticate) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_AuthApi_new"></a>

### new AuthApi(httpClient, tokenService, apiKey)

| Param | Type | Description |
| --- | --- | --- |
| httpClient | <code>HttpClient</code> | HTTP client for making requests |
| tokenService | <code>TokenService</code> | Service which provides methods for token storage |
| apiKey | <code>String</code> | Application API Key |

<a name="AuthApi+authenticate"></a>

### authApi.authenticate() ⇒ <code>Promise.&lt;void&gt;</code>
Authenticates your app: retrieves token and saves it or takes it from the storage.

**Kind**: instance method of [<code>AuthApi</code>](#AuthApi)  
<a name="MediaApi"></a>

## MediaApi
Media API provider

**Kind**: global class  

* [MediaApi](#MediaApi)
    * [new MediaApi(httpClient)](#new_MediaApi_new)
    * [.getById(id)](#MediaApi+getById) ⇒ [<code>Promise.&lt;SingleMediaApiResponse&gt;</code>](#SingleMediaApiResponse)
    * [.getTrending([params])](#MediaApi+getTrending) ⇒ [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse)
    * [.search(query, [params])](#MediaApi+search) ⇒ [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse)

<a name="new_MediaApi_new"></a>

### new MediaApi(httpClient)

| Param | Type | Description |
| --- | --- | --- |
| httpClient | <code>HttpClient</code> | HTTP client for making requests |

<a name="MediaApi+getById"></a>

### mediaApi.getById(id) ⇒ [<code>Promise.&lt;SingleMediaApiResponse&gt;</code>](#SingleMediaApiResponse)
Get media by ID

**Kind**: instance method of [<code>MediaApi</code>](#MediaApi)  
**Returns**: [<code>Promise.&lt;SingleMediaApiResponse&gt;</code>](#SingleMediaApiResponse) - Found media by provided ID  
**Throws**:

- <code>Error</code> Media Id should be provided


| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> \| <code>String</code> | ID of media |

<a name="MediaApi+getTrending"></a>

### mediaApi.getTrending([params]) ⇒ [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse)
Get trending media

**Kind**: instance method of [<code>MediaApi</code>](#MediaApi)  
**Returns**: [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse) - Found trending media  

| Param | Type | Description |
| --- | --- | --- |
| [params] | [<code>HttpRequestParams</code>](#HttpRequestParams) | Request params |

<a name="MediaApi+search"></a>

### mediaApi.search(query, [params]) ⇒ [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse)
Get media by query

**Kind**: instance method of [<code>MediaApi</code>](#MediaApi)  
**Returns**: [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse) - - Found media by query  
**Throws**:

- <code>Error</code> query should be provided


| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | Query for searching media |
| [params] | [<code>HttpRequestParams</code>](#HttpRequestParams) | Request params |

<a name="ApiOptions"></a>

## ApiOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| storage | [<code>Storage</code>](#Storage) | app token storage |

<a name="Storage"></a>

## Storage : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| get | <code>function</code> | get app token info from storage |
| set | <code>function</code> | set app token info to storage |
| clear | <code>function</code> | remove app token info from storage |

<a name="HttpRequestParams"></a>

## HttpRequestParams : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [category] | <code>String</code> | Media category |
| [minimumWidth] | <code>Number</code> | Media minimum width |
| [pageNum] | <code>Number</code> | Page number |
| [size] | <code>Number</code> | Page size |
| [stereoscopicType] | <code>String</code> | Media stereoscopic type |
| [type] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | Media type |

<a name="Media"></a>

## Media : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>String</code> |  |
| src | <code>String</code> | Source file URL with original quality |
| title | <code>String</code> |  |
| description | <code>String</code> |  |
| authors | <code>Array.&lt;String&gt;</code> |  |
| site | <code>String</code> | Source site name where the media came from |
| canonical | <code>String</code> | Canonical URL for the SVRF site |
| embedUrl | <code>String</code> | Embed player URL |
| embedHtml | <code>String</code> | Ready-to-paste HTML code with embed player |
| type | <code>String</code> |  |
| adult | <code>Boolean</code> | Is media only for adults |
| width | <code>Number</code> \| <code>null</code> | Width in pixels |
| height | <code>Number</code> \| <code>null</code> | Height in pixels |
| duration | <code>Number</code> \| <code>null</code> | Duration in seconds |
| metadata | <code>Object</code> |  |
| files | [<code>MediaFiles</code>](#MediaFiles) |  |

<a name="MediaFiles"></a>

## MediaFiles : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| images | <code>Object</code> | 
| videos | <code>Object</code> | 
| stereo | <code>Object</code> | 

<a name="SingleMediaApiResponse"></a>

## SingleMediaApiResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| success | <code>Boolean</code> | 
| media | [<code>Media</code>](#Media) | 

<a name="MultipleMediaApiResponse"></a>

## MultipleMediaApiResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| success | <code>Boolean</code> | 
| media | [<code>Array.&lt;Media&gt;</code>](#Media) | 
| nextPageCursor | <code>String</code> | 
| nextPageNum | <code>Number</code> | 
| pageNum | <code>Number</code> | 

