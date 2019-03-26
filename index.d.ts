declare enum Category {FACE_FILTERS = 'Face Filters'}
declare enum StereoscopicType {NONE = 'none', TOP_BOTTOM = 'top-bottom', LEFT_RIGHT = 'left-right'}
declare enum MediaType {PHOTO = 'photo', VIDEO = 'video', MODEL_3D = '3d'}

declare interface MediaFiles {
  images: Object;
  videos: Object;
  stereo: Object;
}

declare interface Media {
  id: string;
  src: string;
  title: string;
  description: string;
  authors: Array<string>;
  site: string;
  canonical: string;
  url: string;
  embedUrl: string;
  embedHtml: string;
  type: string;
  adult: boolean;
  width: number;
  height: number;
  duration: number | null;
  metadata: Object;
  files: MediaFiles;
}

declare interface SingleMediaApiResponse {
  success: boolean;
  media: Media;
}

declare interface MultipleMediaApiResponse {
  success: boolean;
  media: Array<Media>;
}

declare interface AppTokenSetInfo {
  appToken: string,
  expiresIn: number;
}

declare interface AppTokenInfo {
  appToken: string;
  expirationTime: number;
}

declare interface Storage {
  get(): AppTokenInfo;
  set(appTokenInfo: AppTokenSetInfo): void;
  clear(): void;
}

declare interface SvrfApiClientOptions {
  storage: Storage;
}

declare interface HttpRequestParams {
  category?: Category;
  minimumWidth?: number;
  pageNum?: number;
  size?: number;
  stereoscopicType?: StereoscopicType;
  type?: MediaType | Array<MediaType>;
}

declare interface AuthApi {
  authenticate(): Promise<void>;
}

declare interface MediaApi {
  getById(id: number | string): Promise<SingleMediaApiResponse>;
  getTrending(params?: HttpRequestParams): Promise<MultipleMediaApiResponse>;
  search(query: string, params?: HttpRequestParams): Promise<MultipleMediaApiResponse>;
}

declare class SvrfApiClient {
  constructor(apiKey: string, options: SvrfApiClientOptions);
  auth: AuthApi;
  media: MediaApi;
}

export default SvrfApiClient;
