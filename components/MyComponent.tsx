import React from 'react';

export interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  console.log('Rendering MyComponent with title:', title); // Debug log
  if (typeof title !== 'string') {
    console.log("title", title, typeof title);
    throw new Error(
      `Invalid prop 'title' supplied to 'MyComponent'. Expected a string, but received ${typeof title}.`
    );
  }

  return <h1>{title}</h1>;
};
