import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyD5j0u8aks0FnzhoxUPBt6sfkRzYer39Ds",
  authDomain: "coder-react-bd40e.firebaseapp.com",
  projectId: "coder-react-bd40e",
  storageBucket: "coder-react-bd40e.appspot.com",
  messagingSenderId: "946658783268",
  appId: "1:946658783268:web:ff9e5b3fa55822458368b1"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);
