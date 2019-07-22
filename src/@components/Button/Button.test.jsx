// import React from 'react';
// import { Button } from './Button';
// import { fireEvent, render } from '@testing-library/react';
// import 'jest-dom/extend-expect';

// describe('Functionality', () => {
//   it('should render button with specified text', () => {
//     const { getByText } = render(<Button>Example Text</Button>);
//     expect(getByText(/Example Text/)).toHaveTextContent('Example Text');
//   });

//   it('should fire onClick function when user clicks the button', () => {
//     const handleClick = jest.fn();
//     const component = render(<Button onClick={handleClick}>Btn</Button>);
//     const button = component.getByText(/Btn/);

//     fireEvent.click(button);
//     expect(handleClick).toHaveBeenCalled();
//   });
// });
