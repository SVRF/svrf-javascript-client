# SVRF.MediaVideos

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_848** | **String** | 848px wide video with a 1.3MBps video rate, 96KBps audio rate. | [optional] 
**_1440** | **String** | 1440px wide video with a 4.4MBps video rate, 128KBps audio rate. | [optional] 
**_2160** | **String** | 2160px wide video with a 10MBps video rate, 192KBps audio rate. | [optional] 
**clip** | **String** | A 6-second, 1440px wide clip, with a 2MBps video rate, no audio. | [optional] 
**hls** | **String** | URL for an HLS master playlist containing streams in all of the above resolutions which are no wider than the original Media. This should be used for streaming unless the platform does not support HLS. | [optional] 
**max** | **String** | Maximum resolution video (original source video), &#x60;width&#x60; pixels wide at unspecified video and audio rates. | [optional] 


