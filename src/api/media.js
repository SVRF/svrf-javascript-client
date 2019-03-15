class MediaApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getMediaById(id) {
    return this.httpClient.get(`/vr/${id}`);
  }
}

export default MediaApi;
