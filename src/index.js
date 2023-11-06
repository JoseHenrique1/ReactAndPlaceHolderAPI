import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home/index';
import reportWebVitals from './reportWebVitals';
import "./styles/globals-style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
reportWebVitals();
