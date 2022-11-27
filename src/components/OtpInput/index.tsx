import React from "react";

interface Props {
  inputCount: number,
  inputLength: number,
  label?: string,
  separator?: string,
  isNumeric?: boolean;
}

export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label, separator, isNumeric }) => {

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    const curruntInput = e.currentTarget;
    const isNumberOrDigit = e.code.match(/^(Digit)/) || e.code.match(/^(Key)/);

    if(curruntInput.value.length >= inputLength && isNumberOrDigit) {
      const nextInput = !separator ? curruntInput.nextElementSibling as HTMLElement : curruntInput.nextElementSibling?.nextElementSibling  as HTMLElement ;
      nextInput?.focus();
    } else if (curruntInput.value.length === 0 && e.key === 'Backspace') {
      const previousInput =  !separator ? curruntInput.previousElementSibling as HTMLElement : curruntInput.previousElementSibling?.previousElementSibling  as HTMLElement;
      previousInput?.focus();
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    const { key } = e;
    
    if (isNumeric && isNaN(Number(key)) && key !== 'Backspace')
    {
      e.preventDefault();
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text/plain");
    console.log(e);
  }

  return (
    <form className="otp-input__form">
      {[...Array(inputCount)].map((i, idx)=>(
        <React.Fragment key={idx}>
        <input 
          type="text" 
          className="otp-input__input" 
          maxLength={inputLength} 
          size={inputLength}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
        {
          (idx < inputCount - 1) && <div className="otp-input__separator">{separator}</div>
        }
        </React.Fragment>
      ))}
    </form>
  )
}