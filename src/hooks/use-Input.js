import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState("");
  const [inputIsTouched, setinputIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && inputIsTouched;

  const valueChangeHandler = (e) => {
    setenteredValue(e.target.value);
  };

  const BlurHandler = () => {
    setinputIsTouched(true);
  };

  const reset = () => {
    setenteredValue("");
    setinputIsTouched(false);
  };

  return {
    enteredValue,
    valueChangeHandler,
    hasError,
    BlurHandler,
    reset,
  };
};

export default useInput;
