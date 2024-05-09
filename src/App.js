import React from "react";
import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function  App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/home" element={<Home />}></Route>
          
        </Routes>
          
        </BrowserRouter>
    )

}