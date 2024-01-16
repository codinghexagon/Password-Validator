import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import Input from "./components/Input/Input";
import TextButton from "./components/Buttons/TextButton";

import styles from "./App.module.scss";

const App = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const validatePassword = () => {
    const minLength = 6;
    const hasUppercase = /[A-Z]/.test(password1);
    const hasLowercase = /[a-z]/.test(password1);
    const hasNumber = /\d/.test(password1);
    const hasSpecialChar = /[!@#$%^&*()_\-+={[}\]:;"<,>.]/.test(password1);

    const validate = (condition, errorMessage) => {
      if (!condition) {
        toast["error"](errorMessage);
        setIsInvalid(true);
        return false;
      }

      return true;
    };

    validate(password1 === password2, "Passwords do not match") &&
      validate(
        password1.length >= minLength,
        "Password should be at least 6 characters long"
      ) &&
      validate(
        hasUppercase,
        "Password should contain at least one uppercase letter"
      ) &&
      validate(
        hasLowercase,
        "Password should contain at least one lowercase letter"
      ) &&
      validate(
        hasNumber && hasSpecialChar,
        "Password should contain at least one number and one special character"
      ) &&
      toast["success"]("Password is Perfect");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  return (
    <div className={styles.page}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <h3 className={styles.header}>Password Validator App</h3>
          <Input
            label="Password"
            type="password"
            value={password1}
            name="password1"
            isInvalid={isInvalid}
            onChange={(e) => {
              setPassword1(e.target.value);
              setIsInvalid(false);
            }}
          />
          <Input
            label="Confirm Password"
            value={password2}
            type="password"
            name="password2"
            isInvalid={isInvalid}
            onChange={(e) => {
              setPassword2(e.target.value);
              setIsInvalid(false);
            }}
          />
          <div className={styles.forgotPasswordWrapper}>
            <TextButton
              text="Submit"
              type="submit"
              className={styles.forgotPasswordButton}
            />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default App;
