import { useState } from 'react'
import "./Password.css"
import validator from 'validator'

const Password = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black"); // Initial color

  const validate = (value) => {
    if (validator.isStrongPassword(value)) {
      setValidationMessage("Password is Strong!");
      setMessageColor("green");
    } else {
      setValidationMessage("Password is not Strong. Please consider using a mix of uppercase, lowercase letters, numbers, and symbols.");
      setMessageColor("red");
    }
  };

  return (
    <div className='password'>
      <form action="post">
        <input type="password" required placeholder='Enter Password' onChange={(e) => validate(e.target.value)} />
        <p style={{ color: messageColor }}>{validationMessage}</p>
      </form>
    </div>
  );
};

export default Password;
