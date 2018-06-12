# SvrfApi.MediaStereo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_848** | **String** | 848px wide video with a 1.3MBps video rate, 96KBps audio rate. Only included if the Media is a &#x60;video&#x60;. | [optional] 
**_1440** | **String** | 1440px wide video with a 4.4MBps video rate, 128KBps audio rate. Only included if the Media is a &#x60;video&#x60;. | [optional] 
**_2160** | **String** | 2160px wide video with a 10MBps video rate, 192KBps audio rate. Only included if the Media is a &#x60;video&#x60;. | [optional] 
**_4096** | **String** | 4096px wide image. This image should be used on mobile devices, as larger images may cause some devices to crash. Only included if the Media is a &#x60;photo&#x60;. | [optional] 
**hls** | **String** | URL for an HLS master playlist containing streams in all of the above resolutions which are no wider than the original Media. Only included if the Media is a &#x60;video&#x60;. | [optional] 
**max** | **String** | The Media in its largest available size (the original size). | [optional] 


