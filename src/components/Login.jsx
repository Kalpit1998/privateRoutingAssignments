import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexAPI/userContext";

export function Login() {
  const [form, setForm] = useState({});
  const { handleToken, token } = useContext(UserContext);

  const handleForm = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        handleToken(res.token);
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  if (token) {
    return <Navigate to={"/dashboard"} />;
  } else {
    return (
      <div id="login">
        <div id="form-login">
          <h2>Login Form</h2>
          <form
            onSubmit={(e) => {
              handleForm(e);
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter email here"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter password here"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
