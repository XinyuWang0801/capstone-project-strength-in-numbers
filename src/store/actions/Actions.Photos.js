export const PHOTO_SECTION_COMPLETED = 'PHOTO_SECTION_COMPLETED';

export const completePhotoSection = (photos) => {
  return (dispatch) => {
    const nPhotos = photos.map(item => item.url);
    dispatch({ type: PHOTO_SECTION_COMPLETED, payload: nPhotos });
  };
};
