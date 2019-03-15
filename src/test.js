import SvrfApiClient from './index';

const performAction = async () => {
  const api = new SvrfApiClient('key');

  try {
    await api.auth.authenticate();
  } catch (err) {
    console.log('error');
  }

  const media = await api.media.getMediaById(72063);

  console.log(media);
};

performAction();
