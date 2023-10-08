 import React from "react";
//import BookingForm from "./BookingForm";
//import { useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
import Navigationbar from "./Navigationbar";

  const  LoginPage = () => {
    return( 
   <main className="login">
  
    <form>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" required minlength="2" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" id="password" required minlength="2" />
      </div>
      <button type="submit" className="login-btn"><c>Log In</c></button>
    </form>

  </main>
  )
  }
  export default LoginPage;
