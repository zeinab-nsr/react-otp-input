import React from "react";

export interface Props {
  inputCount: number,
  inputLength: number,
  label?: string,
}

export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label }) => {

  const goToNextInput = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <form className="otp-input__form">
      {[...Array(inputCount)].map(()=>(
        <input type="text" className="otp-input__input" maxLength={inputLength} size={inputLength} onChange={goToNextInput} />
      ))}
    </form>
  )
}