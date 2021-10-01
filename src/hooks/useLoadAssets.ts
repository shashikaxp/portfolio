// @ts-nocheck

const getImageAssets = () => {
  const images = require.context(`../assets/img`, true, /.*\.png$|jpg$|jpeg$/);
  return images;
};

const getImgMetadataFromContext = (images) => {
  const data = [];
  images.keys().forEach((key) => {
    data.push(images(key));
  });
  return data;
};

const cacheImagesPromises = async (images) => {
  const promises = await images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src.default;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  return promises;
};

const progressPromise = (promises, progressCallback) => {
  var len = promises.length;
  var progress = 0;

  function tick(promise) {
    promise.then(function () {
      progress++;
      progressCallback(progress, len);
    });
    return promise;
  }

  return Promise.all(promises.map(tick));
};

interface hookResponse {
  loadAssets: () => Promise<boolean>;
}

export const useLoadAssets = (callback): hookResponse => {
  return {
    loadAssets: async () => {
      const contextImages = getImageAssets();
      const images = getImgMetadataFromContext(contextImages);
      const cachedPromises = await cacheImagesPromises(images);
      await progressPromise(cachedPromises, callback);
      return true;
    },
  };
};
