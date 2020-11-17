import Flickr from 'flickr-sdk';

const { REACT_APP_FLICKR_API_KEY } = process.env;
const { REACT_APP_YOUTUBE_API_KEY } = process.env;

export const getYoutubeApi = async () => {
  const response = await window.gapi.client.request(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-jqp9Jz_9tiGiVVtSiPkmw&order=date&type=video&videoSyndicated=true&key=${REACT_APP_YOUTUBE_API_KEY}`,
  );
  const { items } = JSON.parse(response.body);
  const youtubedata = items.map((video) => {
    const {
      id: { videoId },
      snippet: { title, description },
    } = video;

    return { videoId, title, description };
  });
  return youtubedata;
};

//Flickr//

const getPhotoData = async ({ photoId }) => {
  const flickr = new Flickr(REACT_APP_FLICKR_API_KEY);
  const response = await flickr.photos.getSizes({
    photo_id: photoId,
  });
  const {
    body: {
      sizes: { size },
    },
  } = response;

  const { source } = size.find((item) => item.label === 'Large Square');
  return source;
};

export const getFlickrData = async () => {
  const flickr = new Flickr(REACT_APP_FLICKR_API_KEY);
  console.log(flickr);
  const response = await flickr.people.getPhotos({
    user_id: '91158208@N05',
  });

  const {
    body: {
      photos: { photo },
    },
  } = response;
  const photoIds = photo.map((item) => item.id);
  const urls = await Promise.all(
    photoIds.map(async (id) => await getPhotoData({ photoId: id })),
  );
  return urls;
};
