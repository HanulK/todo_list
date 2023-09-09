import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* App 컴포넌트 불러오기 */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') //id값이 root인 태그 랜더링
);
// reportWebVitals();