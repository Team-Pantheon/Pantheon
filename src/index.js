import 'bootstrap/dist/css/bootstrap.min.css';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);
Kommunicate.init("29d7e7244dd3b8007bdc94a6371983274", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
