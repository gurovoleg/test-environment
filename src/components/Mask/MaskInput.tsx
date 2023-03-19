import { ChangeEventHandler, useEffect, useRef, useMemo } from 'react';
import { Mask } from './Mask';

type InputMaskType = {
  mask: string;
  maskChar?: string;
  placeholder?: string;
  value: string;
  onChange(value: string): void;
};

export const MaskInput = ({
  mask,
  value,
  onChange,
  maskChar = '_',
}: InputMaskType) => {
  const inputRef = useRef<HTMLInputElement>();

  const maskInstance = useMemo(() => {
    return new Mask({ mask, maskChar });
  }, [mask, maskChar]);

  const { maskedValue, lastValuePosition } = maskInstance.addMask(value);

  console.log('InputMask render', { value, maskedValue, lastValuePosition });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const input = e.target;

    const data = {
      value,
      newValue: input.value,
      unmaskedValue: '',
      maskedValue,
      selectionEnd: input.selectionEnd,
      mask,
    };

    const unmaskedValue = maskInstance.removeMask(input.value, value);

    data.unmaskedValue = unmaskedValue;

    console.log(data);

    if (onChange) {
      onChange(unmaskedValue);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.selectionEnd =
        lastValuePosition;
    }
  }, [lastValuePosition]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={maskedValue}
      onChange={handleInputChange}
      style={{ border: '1px solid', padding: '10px' }}
    />
  );
};
