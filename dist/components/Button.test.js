import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';
test('renders Button with the correct label', function () {
    render(_jsx(Button, { label: "Click Me", onClick: function () { } }));
    expect(screen.getByText('Click Me')).toBeInTheDocument();
});
test('calls onClick when the button is clicked', function () {
    var handleClick = jest.fn();
    render(_jsx(Button, { label: "Click Me", onClick: handleClick }));
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
