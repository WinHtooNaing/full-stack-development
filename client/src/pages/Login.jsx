import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components";

import MainNavbar from "./MainNavbar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [my,setMy] = useState("none");


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(e){
    e.preventDefault();
    axios.post("http://localhost:8000/login",{email,password})
    .then(result => {
        console.log(result)
        if(result.data === "Success"){
          
          navigate("/")
        }else{
          setMy("block")
          setTimeout(()=> {
            setMy("none")
          },3000)
          
        }
       
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <MainNavbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">


            <form action="POST">
            <div class="my-3 form-control" style={{width:"350px",height:"40px",background:"red",borderRadius:"5px",display:my}}>
            <p style={{color: "#fff",textAlign:"center"}}>your password is wrong</p>
          </div>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e)=> {setEmail(e.target.value)}}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={submit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
