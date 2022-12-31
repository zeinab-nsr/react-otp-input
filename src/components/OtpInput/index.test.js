import { render, screen, fireEvent } from '@testing-library/react';
import { OtpInput } from './index';

it('should render inputCount number of inputs', () => {
  const inputCount = 4;
  render(<OtpInput inputCount={inputCount} inputLength={1}  getValue={(value) => console.log(value)} />);
  const otpInputElements = screen.getAllByRole('textbox');

  expect(otpInputElements.length).toBe(inputCount);
});

it('should focus on second input when the first input value entered.', () => {

});

it('should focus on first input if the second input value is deleted', () => {

});

it('should prevent typing non-numeric values if isNumber prop is provided', () => {

});

it('should concat inputs values and send the total value to getValue function by clicking on button.', () => {

});

