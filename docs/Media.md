# SvrfApi.Media

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult** | **Boolean** | Whether the Media is adult content | [optional] [default to false]
**authors** | **[String]** | The Media&#39;s authors. This should be displayed when possible. | [optional] 
**canonical** | **String** | The canonical page this Media can be found at via SVRF. | [optional] 
**description** | **String** | A description of the Media | [optional] 
**duration** | **Number** | The duration of the Media in seconds. | [optional] 
**files** | [**MediaFiles**](MediaFiles.md) |  | [optional] 
**height** | **Number** | The height, in pixels, of the Media&#39;s source | [optional] 
**id** | **String** | The unique ID of this Media | [optional] 
**site** | **String** | The site that this Media came from. This should be displayed when possible. | [optional] 
**title** | **String** | The title of the Media, suitable for displaying | [optional] 
**type** | **String** | The type of the Media. This should influence the media controls displayed to the user. | [optional] 
**url** | **String** | The original page this Media is located at. | [optional] 
**width** | **Number** | The width, in pixels, of the Media&#39;s source | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `photo` (value: `"photo"`)

* `video` (value: `"video"`)




