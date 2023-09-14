import React from 'react';
import { createRoot } from 'react-dom/client';
import sample from './assets/sample.png';

const Init = () => {
  return (
    <div>
      <img src={sample} height={100} />
      <div>Hello World!!!!!!!</div>
    </div>
  );
};

// createRoot を使用して初期化
createRoot(document.getElementById('root')).render(<Init />);
