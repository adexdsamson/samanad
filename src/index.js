import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from "firebase/app";
import App from './App';
import * as serviceWorker from './serviceWorker';


const config = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  databaseURL: process.env.REACT_APP_DATABASEURL ,
  projectId: process.env.REACT_APP_PROJECTID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID ,
  appId: process.env.REACT_APP_APPID ,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

app.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
