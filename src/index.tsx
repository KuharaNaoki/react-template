import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // createRoot を使用して初期化
// createRoot(document.getElementById('root')).render(<Init />);
