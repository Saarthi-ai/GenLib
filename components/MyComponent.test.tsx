import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from './MyComponent';

test('renders MyComponent with the correct title', () => {
  render(<MyComponent title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});

test('basic test to ensure Jest is working', () => {
  expect(true).toBe(true);
});
