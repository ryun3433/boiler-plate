import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCF, setPasswordCF] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const passwordCfChangeHandler = (e) => {
    setPasswordCF(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      name: Name,
      email: Email,
      Password: Password,
      PasswordCf: PasswordCF,
    };

    axios.post("http://localhost:5000/register", body).then((res) => {
      if (res.data.success) {
        console.log("성공");
      } else {
        console.log("실패");
      }
    });
  };

  return (
    <div>
      <div>RegisterPage</div>
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              onChange={nameChangeHandler}
              value={Name}
              name="name"
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              onChange={emailChangeHandler}
              value={Email}
              name="email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={passwordChangeHandler}
              value={Password}
              name="password"
            />
          </label>
          <label>
            PasswordCF:
            <input
              type="password"
              onChange={passwordCfChangeHandler}
              value={PasswordCF}
              name="passwordCf"
            />
          </label>
          <input type="submit" onClick={onSubmitHandler} value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
