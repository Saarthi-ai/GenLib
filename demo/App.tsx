import React from 'react';
import { createRoot } from 'react-dom/client';
import MyComponent from '../components/MyComponent';
import Button from '../components/Button'; // Import Button component

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <MyComponent title="Hello, World!" />
      <Button label="Click Me" onClick={handleClick} /> {/* Render Button */}
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // Ensure this targets the correct element
  root.render(<App />);
}
