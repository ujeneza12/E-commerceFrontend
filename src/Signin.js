import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SigninValidation";
import axios from "axios";

export default function Signin() {
  const [values, setValues] = useState({
    firstname: "",
    telephone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (
      errors.firstname === "" &&
      errors.email === "" &&
      errors.telephone === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8080/register", values)
        .then((res) => {
          navigate("/");
        })

        .catch((err) => console.log(err));
    }
  };

  return (
    <div className=" h-screen w-screen bg-blue-400 py-[6rem] ">
      <div className="flex justify-center ml-[30rem]  w-[420px] bg-gray-200 py-10 rounded">
        <form action="" onSubmit={handleSubmit}>
          <p className="text-center text-lg font-bold">Welcome Register Here</p>
            <div className="mt-[1.3rem] ">
              <input
                type="text"
                placeholder="Enter Firstname"
                className=" w-[20rem] h-[2rem] rounded outline-none "
                name="firstname"
                onChange={handleInput}
              />
              {errors.firstname && (
                <span className="text-red-400">{errors.firstname}</span>
              )}
            </div>

          <div className="mt-[1.3rem] ">
              <input
                type="number"
                placeholder="Enter telephone"
                className=" w-[20rem] h-[2rem] rounded outline-none "
                name="telephone"
                onChange={handleInput}
              />
              {errors.telephone && (
                <span className="text-red-400">{errors.telephone}</span>
              )}
            </div>

          <div className="mt-[1.5rem] ">
            <input
              type="email"
              placeholder="Enter email"
              className=" w-[20rem] h-[2rem] rounded outline-none "
              onChange={handleInput}
              name="email"
            />
             <br/>
            {errors.email && <span className="text-red-400">{errors.email}</span> }
          </div>
          <div className="mt-[2.5rem]">
            <input
              type="password"
              placeholder="Enter password"
              className=" w-[20rem] h-[2rem] rounded outline-none"
              onChange={handleInput}
              name="password"
            />
            <br/>
            {errors.password && <span className="text-red-400">{errors.password}</span> }

          </div>

          <button type="submit" className="mt-[1.5rem] inline-flex items-center px-[8rem] py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign In
          </button>
          <p className="mt-[0.2rem] ml-[3rem]">
            If you already have an account
          </p>
          <Link
            to="/"
            className="mt-[1rem] inline-flex items-center px-[8rem] py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}
