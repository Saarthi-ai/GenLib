import React from 'react';
import { createRoot } from 'react-dom/client';
import ImgComp from '../src/components/imgComp/imgComp';
// Fix import to use named export


const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      hello
      <ImgComp />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // Ensure this targets the correct element
  root.render(<App />);
}
