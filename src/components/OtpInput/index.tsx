import React from "react";

interface Props {
  inputCount: number,
  inputLength: number,
  label?: string,
  separator?: string,
  isNumeric?: boolean;
}

export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label, separator, isNumeric }) => {

  const handleKeyUp = ({ currentTarget, code, key }: React.KeyboardEvent<HTMLInputElement> ) => {
    const curruntInput = currentTarget;
    const isNumberOrDigit = code.match(/^(Digit)/) || code.match(/^(Key)/);

    if(curruntInput.value.length >= inputLength && isNumberOrDigit) {
      const nextInput = !separator ? 
      curruntInput.nextElementSibling as HTMLElement : 
      curruntInput.nextElementSibling?.nextElementSibling  as HTMLElement ;
      nextInput?.focus();
    } else if (curruntInput.value.length === 0 && key === 'Backspace') {
      const previousInput =  !separator ?
       curruntInput.previousElementSibling as HTMLElement : 
       curruntInput.previousElementSibling?.previousElementSibling  as HTMLElement;
      previousInput?.focus();
    }
  }

  const preventEnterNonNumeric = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    const { key } = e;
    if (isNumeric && isNaN(Number(key)) && key !== 'Backspace')
    {
      e.preventDefault();
    }
  }

  return (
    <form className="otp-input__form">
      {label && <span className="otp-input__label">
        {label}
      </span>}
      {[...Array(inputCount)].map((_, idx)=>(
        <React.Fragment key={idx}>
        <input 
          type="text" 
          className="otp-input__input" 
          maxLength={inputLength} 
          size={inputLength}
          onKeyUp={handleKeyUp}
          onKeyDown={preventEnterNonNumeric}
        />
        {
          (idx < inputCount - 1) && <div className="otp-input__separator">{separator}</div>
        }
        </React.Fragment>
      ))}
    </form>
  )
}