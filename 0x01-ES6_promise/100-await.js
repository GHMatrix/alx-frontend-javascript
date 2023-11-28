import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photo, user] = await Promise.all([photoPromise, userPromise]);

    return {
      photo,
      user,
    };
  } catch (error) {
    // Handle errors, and return an empty object if any of the promises fail.
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
