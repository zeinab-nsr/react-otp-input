import { render, screen, fireEvent } from '@testing-library/react';
import { OtpInput } from './index';

it('should render inputCount number of inputs', () => {
  const inputCount = 4;
  render(<OtpInput inputCount={inputCount} inputLength={1}  getValue={(value) => console.log(value)} />);
  const otpInputElements = screen.getAllByRole('textbox');

  expect(otpInputElements.length).toBe(inputCount);
});

it('should focus on second input when the first input value entered.', () => {
  render(<OtpInput inputCount={2} inputLength={1}  getValue={(value) => console.log(value)} />);
  const otpInputElements = screen.getAllByRole('textbox');
  fireEvent.change(otpInputElements[0] , {target: {value: 2}});
  
  expect(otpInputElements[1]).toHaveFocus();
});

it('should prevent typing non-numeric values if isNumber prop is provided', () => {
  render(<OtpInput inputCount={2} inputLength={1}  getValue={(value) => console.log(value)} isNumeric />);
  const otpInputElements = screen.getAllByRole('textbox');
  fireEvent.keyDown(otpInputElements[0], {
    key: "a",
    code: "KeyA",
    keyCode: 65,
    charCode: 0,
  });

  expect(otpInputElements[0].value).toBe('');
});


