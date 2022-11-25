import React, { useRef, useEffect } from "react";

interface Props {
  inputCount: number,
  inputLength: number,
  label?: string,
}
export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label }) => {

  const goToNextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length === inputLength) {
      const nextInput = e.target.nextElementSibling as HTMLElement;
      nextInput?.focus();
    }
  }

  return (
    <form className="otp-input__form">
      {[...Array(inputCount)].map((i, idx)=>(
        <input 
          key={idx}
          type="text" 
          className="otp-input__input" 
          //ref={React.createRef()} 
          maxLength={inputLength} 
          size={inputLength} 
          onChange={goToNextInput} 
          //autoFocus={false}
        />
      ))}
    </form>
  )
}