import React from 'react';

export interface TestCompProps {
  message: string;
}

export const TestComp: React.FC<TestCompProps> = ({ message }) => {
  return <p>{message}</p>;
};
