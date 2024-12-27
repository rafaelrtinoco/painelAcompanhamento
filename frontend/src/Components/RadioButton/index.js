import React from "react";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';   

function RadioButton(){

  const CustomRadio = styled({
    root: {
      color: '#FFD3CA',
      '&$checked': {
        color: '#1d388a',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <div className="radioOptions">
      <CustomRadio />
      <span>Todos</span>
    </div>
  )
}

export default RadioButton;