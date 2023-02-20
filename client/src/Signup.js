import React, { useState } from "react";
//import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handlerInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      //history.pushState("")
    }
  };

  return (
    <>
      <form method="POST" className="register-form" id="register-form">
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={user.name}
          onChange={handlerInputs}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          value={user.email}
          onChange={handlerInputs}
          placeholder="Your Email"
        />
        <input
          type="number"
          name="phone"
          id="phone"
          autoComplete="off"
          value={user.phone}
          onChange={handlerInputs}
          placeholder="Your Phone Number"
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={user.password}
          onChange={handlerInputs}
          placeholder="Password"
        />
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          autoComplete="off"
          value={user.cpassword}
          onChange={handlerInputs}
          placeholder="Confirm Password"
        />
        <input
          type="submit"
          name="signup"
          id="signup"
          value="Submit"
          onClick={PostData}
        />
      </form>
    </>
  );
};

export default Signup;
