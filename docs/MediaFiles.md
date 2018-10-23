# SVRF.MediaFiles

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glb** | **String** | This is the binary glTF format that should be used by clients if the Media is a 3D object. This is the preferred format to use on end-user devices. | [optional] 
**glbDraco** | **String** | This is the binary glTF format, with additional DRACO compression, that should be used by clients if the Media is a 3D object. Your renderer must support the KHR_draco_mesh_compression extension to use this model. | [optional] 
**gltf** | **{String: String}** | A map of file names to urls where those files are hosted. The file names are relative and their name heirarchy should be respected when saving them locally. | [optional] 
**images** | [**MediaImages**](MediaImages.md) |  | [optional] 
**stereo** | [**MediaStereo**](MediaStereo.md) |  | [optional] 
**videos** | [**MediaVideos**](MediaVideos.md) |  | [optional] 


