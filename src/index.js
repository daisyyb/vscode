import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//프로젝트 전체에 영향을 미치는 항목들이다 
// Bootstrap & Bootswatch CSS 임포트
// Bootstrap & Bootswatch CSS 임포트
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap 기본 스타일
import 'bootswatch/dist/flatly/bootstrap.min.css'; // Bootswatch 테마 (flatly 예시)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
