import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "API_Key",
  authDomain: "AUth_Domain",
  databaseURL: "DB_URL",
  projectId: "ID",
  storageBucket: "STORAGE",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.database = app.database;

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  getCurrentUserEmailId() {
    return this.auth.currentUser.email;
  }

  doSignInWithGoogle() {
    return this.auth.signInWithPopup(this.googleProvider);
  }

  doSignInWithFacebook() {
    return this.auth.signInWithPopup(this.facebookProvider);
  }
}

export default new Firebase();
