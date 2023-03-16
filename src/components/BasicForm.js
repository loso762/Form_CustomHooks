import { useState } from "react";
import useInput from "../hooks/use-Input";

const BasicForm = (props) => {
  const {
    enteredValue: Fname,
    hasError: FnameError,
    valueIsValid: FNameIsValid,
    valueChangeHandler: FnameChangeHandler,
    BlurHandler: FnameBlurHandler,
    reset: FnameReset,
    valueClass: FnameClass,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: Lname,
    valueChangeHandler: LnameChangeHandler,
    valueIsValid: LNameIsValid,
    hasError: LnameError,
    BlurHandler: LnameBlurHandler,
    reset: LnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: Email,
    valueChangeHandler: EmailChangeHandler,
    valueIsValid: EmailIsValid,
    hasError: EmailError,
    BlurHandler: EmailBlurHandler,
    reset: EmailReset,
  } = useInput((value) => value.includes("@"));

  const LnameClass = LnameError ? "no" : "ok";
  const EmailClass = EmailError ? "no" : "ok";

  let FormIsValid = false;
  console.log(FNameIsValid);
  if (FNameIsValid && LNameIsValid && EmailIsValid) {
    FormIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(Fname, Lname, Email);

    FnameReset();
    LnameReset();
    EmailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            className={FnameClass}
            type="text"
            id="Fname"
            value={Fname}
            onChange={FnameChangeHandler}
            onBlur={FnameBlurHandler}
          />
          {FnameError && <p className="ErrorP">First Name is Error</p>}
        </div>

        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            className={LnameClass}
            type="text"
            id="Lname"
            value={Lname}
            onChange={LnameChangeHandler}
            onBlur={LnameBlurHandler}
          />
          {LnameError && <p className="ErrorP">Last Name is Error</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          className={EmailClass}
          type="email"
          id="email"
          value={Email}
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
        />
        {EmailError && <p className="ErrorP">Email must contain an @ symbol</p>}
      </div>

      <div className="form-actions">
        <button disabled={!FormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
