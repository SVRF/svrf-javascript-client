## Classes

<dl>
<dt><a href="#Svrf">Svrf</a></dt>
<dd><p>Svrf API provider</p>
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
<dt><a href="#MediaMetadata">MediaMetadata</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SingleMediaApiResponse">SingleMediaApiResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#MultipleMediaApiResponse">MultipleMediaApiResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SearchMediaApiResponse">SearchMediaApiResponse</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Enums">Enums</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Svrf"></a>

## Svrf
Svrf API provider

**Kind**: global class  

* [Svrf](#Svrf)
    * [new Svrf(apiKey, [options])](#new_Svrf_new)
    * _instance_
        * [.media](#Svrf+media) : [<code>MediaApi</code>](#MediaApi)
        * [.authenticate()](#Svrf+authenticate) ⇒ <code>Promise.&lt;void&gt;</code>
    * _static_
        * [.enums](#Svrf.enums) : [<code>Enums</code>](#Enums)

<a name="new_Svrf_new"></a>

### new Svrf(apiKey, [options])

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>String</code> | API Key |
| [options] | [<code>ApiOptions</code>](#ApiOptions) | API options |

<a name="Svrf+media"></a>

### svrf.media : [<code>MediaApi</code>](#MediaApi)
MediaApi instance

**Kind**: instance property of [<code>Svrf</code>](#Svrf)  
<a name="Svrf+authenticate"></a>

### svrf.authenticate() ⇒ <code>Promise.&lt;void&gt;</code>
Authenticates your app: retrieves token and saves it or takes it from the storage.
You should call it only if you passed the isManualAuthentication option.

**Kind**: instance method of [<code>Svrf</code>](#Svrf)  
<a name="Svrf.enums"></a>

### Svrf.enums : [<code>Enums</code>](#Enums)
**Kind**: static property of [<code>Svrf</code>](#Svrf)  
<a name="MediaApi"></a>

## MediaApi
Media API provider

**Kind**: global class  

* [MediaApi](#MediaApi)
    * [.getById(id)](#MediaApi+getById) ⇒ [<code>Promise.&lt;SingleMediaApiResponse&gt;</code>](#SingleMediaApiResponse)
    * [.getTrending([params])](#MediaApi+getTrending) ⇒ [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse)
    * [.search(query, [params])](#MediaApi+search) ⇒ [<code>Promise.&lt;SearchMediaApiResponse&gt;</code>](#SearchMediaApiResponse)

<a name="MediaApi+getById"></a>

### mediaApi.getById(id) ⇒ [<code>Promise.&lt;SingleMediaApiResponse&gt;</code>](#SingleMediaApiResponse)
Get media by ID

**Kind**: instance method of [<code>MediaApi</code>](#MediaApi)  
**Returns**: [<code>Promise.&lt;SingleMediaApiResponse&gt;</code>](#SingleMediaApiResponse) - Found media by provided ID  
**Throws**:

- <code>Error</code> Media Id should be provided


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | ID of media |

<a name="MediaApi+getTrending"></a>

### mediaApi.getTrending([params]) ⇒ [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse)
Get trending media

**Kind**: instance method of [<code>MediaApi</code>](#MediaApi)  
**Returns**: [<code>Promise.&lt;MultipleMediaApiResponse&gt;</code>](#MultipleMediaApiResponse) - Found trending media  

| Param | Type | Description |
| --- | --- | --- |
| [params] | [<code>HttpRequestParams</code>](#HttpRequestParams) | Request params |

<a name="MediaApi+search"></a>

### mediaApi.search(query, [params]) ⇒ [<code>Promise.&lt;SearchMediaApiResponse&gt;</code>](#SearchMediaApiResponse)
Get media by query

**Kind**: instance method of [<code>MediaApi</code>](#MediaApi)  
**Returns**: [<code>Promise.&lt;SearchMediaApiResponse&gt;</code>](#SearchMediaApiResponse) - - Found media by query  
**Throws**:

- <code>Error</code> query should be provided


| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | Query for searching media |
| [params] | [<code>HttpRequestParams</code>](#HttpRequestParams) | Request params |

<a name="Category"></a>

## Category : <code>enum</code>
Enum for category

**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| FACE_FILTERS | <code>string</code> | <code>&quot;Face Filters&quot;</code> | 

<a name="MediaType"></a>

## MediaType : <code>enum</code>
Enum for media types

**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PHOTO | <code>string</code> | <code>&quot;photo&quot;</code> | 
| VIDEO | <code>string</code> | <code>&quot;video&quot;</code> | 
| MODEL_3D | <code>string</code> | <code>&quot;3d&quot;</code> | 

<a name="StereoscopicType"></a>

## StereoscopicType : <code>enum</code>
Enum for stereoscopic types

**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| NONE | <code>string</code> | <code>&quot;none&quot;</code> | 
| TOP_BOTTOM | <code>string</code> | <code>&quot;top-bottom&quot;</code> | 
| LEFT_RIGHT | <code>string</code> | <code>&quot;left-right&quot;</code> | 

<a name="ApiOptions"></a>

## ApiOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isManualAuthentication | <code>boolean</code> | pass this option if you want to call api.authenticate manually (for example while user IDLE). |
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
| [category] | <code>string</code> | Media category |
| [hasBlendShapes] | <code>boolean</code> |  |
| [isFaceFilter] | <code>boolean</code> |  |
| [minimumWidth] | <code>number</code> | Media minimum width |
| [pageNum] | <code>number</code> | Page number |
| [requiresBlendShapes] | <code>boolean</code> |  |
| [size] | <code>number</code> | Page size |
| [stereoscopicType] | <code>string</code> | Media stereoscopic type |
| [type] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Media type |

<a name="Media"></a>

## Media : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| src | <code>string</code> | Source file URL with original quality |
| title | <code>string</code> |  |
| description | <code>string</code> |  |
| authors | <code>Array.&lt;string&gt;</code> |  |
| site | <code>string</code> | Source site name where the media came from |
| canonical | <code>string</code> | Canonical URL for the Svrf site |
| embedUrl | <code>string</code> | Embed player URL |
| embedHtml | <code>string</code> | Ready-to-paste HTML code with embed player |
| type | <code>string</code> |  |
| adult | <code>boolean</code> | Is media only for adults |
| width | <code>number</code> \| <code>null</code> | Width in pixels |
| height | <code>number</code> \| <code>null</code> | Height in pixels |
| duration | <code>number</code> \| <code>null</code> | Duration in seconds |
| metadata | [<code>MediaMetadata</code>](#MediaMetadata) |  |
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

<a name="MediaMetadata"></a>

## MediaMetadata : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [isFaceFilter] | <code>boolean</code> | 
| [hasBlendShapes] | <code>boolean</code> | 
| [requiresBlendShapes] | <code>boolean</code> | 

<a name="SingleMediaApiResponse"></a>

## SingleMediaApiResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| success | <code>boolean</code> | 
| media | [<code>Media</code>](#Media) | 

<a name="MultipleMediaApiResponse"></a>

## MultipleMediaApiResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| success | <code>boolean</code> | 
| media | [<code>Array.&lt;Media&gt;</code>](#Media) | 
| nextPageCursor | <code>string</code> | 
| nextPageNum | <code>number</code> | 
| pageNum | <code>number</code> | 

<a name="SearchMediaApiResponse"></a>

## SearchMediaApiResponse : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| success | <code>boolean</code> | 
| media | [<code>Array.&lt;Media&gt;</code>](#Media) | 
| nextPageCursor | <code>string</code> | 
| nextPageNum | <code>number</code> | 
| pageNum | <code>number</code> | 
| tookMs | <code>number</code> | 
| totalNum | <code>number</code> | 

<a name="Enums"></a>

## Enums : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| category | [<code>Category</code>](#Category) | 
| mediaType | [<code>MediaType</code>](#MediaType) | 
| stereoscopicType | [<code>StereoscopicType</code>](#StereoscopicType) | 

