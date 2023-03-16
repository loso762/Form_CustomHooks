import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setenteredValue(e.target.value);
  };

  const BlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setenteredValue("");
    setIsTouched(false);
  };

  const valueClass = hasError ? "no" : "ok";

  return {
    enteredValue,
    valueIsValid,
    valueChangeHandler,
    hasError,
    BlurHandler,
    reset,
    valueClass,
  };
};

export default useInput;
