import React from "react";

interface Props {
  inputCount: number,
  inputLength: number,
  label?: string,
  separator?: string,
}
export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label, separator }) => {

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    const curruntInput = e.currentTarget;
    if(curruntInput.value.length >= inputLength) {
      const nextInput = curruntInput.nextElementSibling as HTMLElement;
      nextInput?.focus();
    } else if (curruntInput.value.length === 0) {
      const previousInput = curruntInput.previousElementSibling as HTMLElement;
      previousInput?.focus();
    }
  }

  return (
    <form className="otp-input__form">
      {[...Array(inputCount)].map((i, idx)=>(
        <>
        <input 
          key={idx}
          type="text" 
          className="otp-input__input" 
          maxLength={inputLength} 
          size={inputLength}
          onKeyUp={handleKeyPress}
        />
        {
          //(idx < inputCount - 1) && <div className="otp-input__separator">{separator}</div>
        }
        </>
      ))}
    </form>
  )
}