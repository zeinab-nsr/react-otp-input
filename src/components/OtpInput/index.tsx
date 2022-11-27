import React from "react";

interface Props {
  inputCount: number,
  inputLength: number,
  label?: string,
  separator?: string,
  isNumeric?: boolean;
}

export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label, separator, isNumeric }) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    const { key } = e;
    if (isNumeric && isNaN(Number(key)))
    {
      e.preventDefault();
    }
    const curruntInput = e.currentTarget;
    if(curruntInput.value.length >= inputLength) {
      const nextInput = curruntInput.nextElementSibling as HTMLElement;
      nextInput?.focus();
    } else if (curruntInput.value.length === 0) {
      const previousInput = curruntInput.previousElementSibling as HTMLElement;
      previousInput?.focus();
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text/plain");
    console.log(e);
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
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
        {
          //(idx < inputCount - 1) && <div className="otp-input__separator">{separator}</div>
        }
        </>
      ))}
    </form>
  )
}