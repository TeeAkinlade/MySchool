"use client"

import { useState } from 'react';
import ListOptions from './ListOptions';

const SelectOptions = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
       <p className='font-semibold text-xl mb-2'>Where are you located?</p>
       <p className='text-xs font-normal text-[#444444] leading-5'>This is a subtitle text. It is used to include additional instructions for respondent.</p>
      <ListOptions selectedOption={selectedOption} handleChange={handleChange} />
    </div>
  );
}

export default SelectOptions;
