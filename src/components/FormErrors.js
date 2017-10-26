import React from 'react';

const FormErrors = ({formErrors}) => {
  
  return (
    <div className='form__errors'>
      {Object.keys(formErrors).map((fieldName, i) => {
        if(formErrors[fieldName].length > 0) {
          return (
            <p key={i}>{fieldName} {formErrors[fieldName]}</p>
          )
        } else {
          return '';
        }
      })}
    </div>
  )
}

export default FormErrors;