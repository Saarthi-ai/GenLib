import React from 'react';
import { createRoot } from 'react-dom/client';
import ImgComp from '../src/components/imgComp/imgComp';
// Fix import to use named export

// import { MyComponent } from '../components/MyComponent'; // Fix import to use named export
import AddButton from '../src/components/addButton/AddButton';
import BiSelect from '../src/components/biSelect/BiSelect';
import { Br } from '../src/components/br/Br';
// import Breadcrum from '../src/components/breadcrum/Breadcrum';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      hello
      <ImgComp />
      {/* <MyComponent title="Hello, World!" /> */}
      <AddButton text="Add" onCountChange={(count) => console.log(count)} />
      <BiSelect opt1="Option 1" opt2="Option 2" onUpdate={(event) => console.log(event)} />
      <Br />
      {/* <Breadcrum /> */}
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // Ensure this targets the correct element
  root.render(<App />);
}
