import { useState } from 'react';
import { MaskInput } from './MaskInput';

export const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // console.log('PhoneNumber render', phoneNumber);

  const handlePhoneNumberChange = (value: string): void => {
    setPhoneNumber(value);
  };

  return (
    <div>
      <label>Phone Number:</label>
      <MaskInput
        mask="(_) _-_"
        // mask="**/**/****"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
};
