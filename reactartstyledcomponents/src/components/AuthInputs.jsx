import { useState } from "react";
//styled components
import { styled } from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
/*
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "6b7280")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
*/

//we will place it in a seperate component file so that we can reuse it
/*const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;*/

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  //here we imported Custom Input which we named here Input from Input.jsx and the CustomInput function returns the Label styled component and Input also and it takes props label, invalid and ...props rest of props and it return the Label custom styled component with the $invalid attribute equals the invalid prop and the label prop between the opening and closing tag and in the Input styled component it contains the $Invalid attribute equals the invalid prop and the rest of the props like onChange prop and others and that's it here instead of putting p tag and then label and then input just put the input we imported here and that's it the custom input function will execute
  return (
    <div id="auth-inputs">
      {/* before styled components */}
      {/* <div className="controls"> */}
      {/* after styled components */}
      <ControlContainer>
        {/* <p> */}
        {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}> */}
        {/* <Label $invalid={emailNotValid}>Email</Label> */}
        <Input
          //inline styling
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
          // }}
          //now with styled components we can output dynamic and conditional styling in a different way
          // className={emailNotValid ? "invalid" : undefined}
          //no need for $ anymore because you put it in the custom input function in input.jsx
          // $invalid={emailNotValid}
          type="email"
          label="Email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        {/* </p> */}
        {/* <p> */}
        {/* <Label $invalid={passwordNotValid}>Password</Label> */}
        <Input
          // here we put $invalid and not just invalid because invalid is a built in prop so to make invalid not a built in prop so that no other component not importing styled components can use it we need to put $ first so $invalid
          // $invalid={passwordNotValid}
          type="password"
          label="Password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/* </p> */}
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
      {/* <p>Some Text</p> */}
    </div>
  );
}
