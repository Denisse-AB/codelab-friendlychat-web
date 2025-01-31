/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCSdHcTN2_XcyBwcOl0V5HzSu-PYO8UMjk",
  authDomain: "friendlychat-b7cfb.firebaseapp.com",
  projectId: "friendlychat-b7cfb",
  storageBucket: "friendlychat-b7cfb.appspot.com",
  messagingSenderId: "603271768503",
  appId: "1:603271768503:web:92fd0c87aa5d0ba633a032"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}