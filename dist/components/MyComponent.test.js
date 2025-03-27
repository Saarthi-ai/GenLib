import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent'; // Fix import to use named export
test('renders MyComponent with the correct title', function () {
    render(_jsx(MyComponent, { title: "Test Title" }));
    expect(screen.getByText('Test Title')).toBeInTheDocument();
});
test('basic test to ensure Jest is working', function () {
    expect(true).toBe(true);
});
