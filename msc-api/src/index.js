import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
  apiKey: "AIzaSyAgiZ5jVwPM8SbwbXXXE04Hl3Am7y6qv74",
  authDomain: "simple-todolist-1fc7c.firebaseapp.com",
  databaseURL: "https://simple-todolist-1fc7c.firebaseio.com",
  projectId: "simple-todolist-1fc7c",
  storageBucket: "simple-todolist-1fc7c.appspot.com",
  messagingSenderId: "884602529762"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
