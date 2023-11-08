import React, { useState, useRef, useEffect } from "react";

interface Props {
  inputCount: number;
  inputLength: number;
  onSubmit: (value: string) => void;
  label?: string;
  separator?: string;
  isNumeric?: boolean;
}

export const OtpInput: React.FC<Props> = ({ inputCount, inputLength, label, separator, isNumeric, onSubmit }) => {
  const [otp, setOtp] = useState<string[]>(new Array(inputCount).fill(''));
  const [activeInputIndex, setActiveInputIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = target;
    const newOtp = [...otp];
    
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value.length === inputLength) {
      setActiveInputIndex(index + 1);
    }
  }
  
  const handleKeyUp = ({ currentTarget, key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const inputValue = currentTarget.value;
    if (key === 'Backspace' && inputValue.length === 0) {
      setActiveInputIndex(index - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const isNumberOrDigit = e.code.match(/^(Digit)/) || e.code.match(/^(Key)/);
    if(e.currentTarget.value.length >= inputLength && isNumberOrDigit) {
      setActiveInputIndex(index + 1)
    }
    if (isNumeric && isNaN(Number(e.key)) && e.key !== 'Backspace' && e.key !== 'Enter')
      {
        e.preventDefault();
      }
  }

  const getTotalNumber = () => {
    const totalValue = otp.join('');
    onSubmit(totalValue);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeInputIndex])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getTotalNumber(); 
  };

  return (
    <form className="otp-input__form" onSubmit={handleSubmit}>
      <div className="otp-input__wrapper">
        {label && <span className="otp-input__label">
          {label}
        </span>}
        {[...Array(inputCount)].map((_, index)=>(
          <React.Fragment key={index}>
          <input 
            type="text" 
            className="otp-input__input" 
            ref={index === activeInputIndex ? inputRef : null}
            value={otp[index]}
            maxLength={inputLength} 
            size={inputLength}
            onChange={(e) => handleChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
          {
            (index < inputCount - 1) && <div className="otp-input__separator">{separator}</div>
          }
          </React.Fragment>
        ))}
      </div>
      <input type="submit" className="otp-input__button" value="Get total value!"  />
    </form>
  )
}