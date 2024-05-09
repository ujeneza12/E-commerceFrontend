import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const [errors, setErrors]= useState({})
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]: event.target.value}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
  setErrors(Validation(values))
  if (
    errors.email === "" &&
    errors.password === ""
  ) {
    axios
      .post("http://localhost:8080/auth/login", values)
      .then((res) => {
        if(res.data === "success"){
          navigate('/home');
        }else{
          alert("No record exists")
        }
      })

      .catch((err) => console.log(err));
  }
  }

  return (
    <div className=" h-screen w-screen bg-blue-400 py-[10rem] ">
      <div className="flex justify-center ml-[30rem]  w-[420px] bg-gray-200 py-10 rounded ">
        <form action="" onSubmit={handleSubmit}>
          <p className="text-center text-lg font-bold">Welcome Back</p>
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
            Log In
          </button>
          <p className="mt-[1.5rem]">You are to out terms and policies</p>
          <Link
            to="/signin"
            className="mt-[1rem] inline-flex items-center px-[8rem] py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
}
