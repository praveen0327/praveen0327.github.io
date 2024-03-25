importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyD8iCtAC9VgNi3CQ5BqxPUlDBFa0aC1hvA",
  authDomain: "abiad-9ae45.firebaseapp.com",
  projectId: "abiad-9ae45",
  storageBucket: "abiad-9ae45.appspot.com",
  messagingSenderId: "689506937494",
  appId: "1:689506937494:web:cdb3bf2d1ec0ab2a1bf0b7",
  measurementId: "G-CHST04PB4X"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});