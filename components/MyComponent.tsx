import React from 'react';

export interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  console.log(typeof title)
  return <h1>{title}</h1>;
};
