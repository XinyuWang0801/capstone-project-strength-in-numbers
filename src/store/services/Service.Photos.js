import { storage } from '../../firebase';

const userUID = '123'; // change this later when user accounts get created

export const uploadPhoto = async (option) => {
  const { onSuccess, onError, file, onProgress } = option;
  // const index = database.ref().child('accommodations').orderByKey('userId');
  try {
    const uploadTask = storage.ref().child(`${userUID}/${file.uid}`).put(file);

    uploadTask.on('state_changed', (snapshot) => {
      // https://firebase.google.com/docs/storage/web/upload-files#monitor_upload_progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress({ percent: progress });
    }, (e) => {
      onError(e);
    }, async () => {
      const imageUrl = await storage.ref().child(`${userUID}/${file.uid}`).getDownloadURL();

      onSuccess({ message: 'Successfully uploaded', url: imageUrl });
      return imageUrl;
    });
  } catch (e) {
    onError(e);
  }
};

export const removePhoto = async (fileUID) => {
  const removeTask = await storage.ref().child(`${userUID}/${fileUID}`).delete();
  return removeTask;
};
