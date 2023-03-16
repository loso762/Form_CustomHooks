import { useState } from "react";
import useInput from "../hooks/use-Input";

const BasicForm = (props) => {
  const {
    enteredValue: Fname,
    valueChangeHandler: FnameChangeHandler,
    hasError: FnameError,
    BlurHandler: FnameBlurHandler,
    reset: FnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: Lname,
    valueChangeHandler: LnameChangeHandler,
    hasError: LnameError,
    BlurHandler: LnameBlurHandler,
    reset: LnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: Email,
    valueChangeHandler: EmailChangeHandler,
    hasError: EmailError,
    BlurHandler: EmailBlurHandler,
    reset: EmailReset,
  } = useInput((value) => value.includes("@"));

  const FnameClass = FnameError ? "no" : "ok";
  const LnameClass = LnameError ? "no" : "ok";
  const EmailClass = EmailError ? "no" : "ok";

  const SubmitIsValid = !FnameError && !LnameError && !EmailError;

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
        <button disabled={!SubmitIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
