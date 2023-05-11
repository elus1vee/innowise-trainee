import firebase from "firebase/compat/app";
import "firebase/compat/auth";

class StorageService {
  public saveImg = async (img: Blob, email: string, date: number) => {
    await firebase
      .storage()
      .ref(`/images/${date}.png`)
      .put(img, { customMetadata: { author: email } });
  };

  public getImgList = async () => {
    return await firebase.storage().ref("/images/").list();
  };

  public getImgMetaData = async (path: string) => {
    return await firebase.storage().ref(path).getMetadata();
  };

  public getImgUrl = async (path: string) => {
    return await firebase.storage().ref(path).getDownloadURL();
  };
}

export const storageService = new StorageService();
