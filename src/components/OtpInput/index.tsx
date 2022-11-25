import React, { ClipboardEvent, RefObject } from "react";

export interface Props {
  inputCount: number,
  inputLength: number,

}

export const OtpInput: React.FC<Props> = ({ inputCount, inputLength }) => {

  return (
    <form className="otp-input__form">
      <input type="text" className="otp-input__input" maxLength={inputLength} size={inputLength} />
      <input type="text" className="otp-input__input" maxLength={inputLength} size={inputLength} />
      <input type="text" className="otp-input__input" maxLength={inputLength} size={inputLength} />
      <input type="text" className="otp-input__input" maxLength={inputLength} size={inputLength} />
    </form>
  )
}