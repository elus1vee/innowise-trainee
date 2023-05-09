import firebase from "firebase/compat/app";
import "firebase/compat/auth";

class AuthService {
  public signIn = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  public logOut = async () => {
    await firebase.auth().signOut();
  };

  public signUp = (email: string, password: string) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  public getUserUid = () => {
    return firebase.auth().currentUser?.uid;
  };

  public getUserEmail = () => {
    return firebase.auth().currentUser?.email;
  };

  public authStateChanged = (callback: (user: any) => void) => {
    firebase.auth().onAuthStateChanged(callback);
  };

  public isLoggedIn = () => {
    // firebase.auth().onAuthStateChanged()
  };
}

export const authService = new AuthService();
