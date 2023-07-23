import React, { useState } from 'react'
import { Footer } from "../components";
import { Link, useNavigate } from 'react-router-dom';

import MainNavbar from './MainNavbar';
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate();

    const [my,setMy] = useState("none");


    const [name,setName] = useState();
    const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  async function submit(e){
    e.preventDefault();
    axios.post("http://localhost:8000/register",{name,email,password})
    .then(result => {
        console.log(result.data.errors)
        if(result.data.errors){
            setMy("block")
          setTimeout(()=> {
            setMy("none")
          },3000)
        }else{
            navigate("/login")
            console.log(result.data.name)
        }
        
    })
    .catch(err => console.log(err))
  }
    return (
        <>
            <MainNavbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                        <div class="my-3 form-control" style={{width:"350px",height:"40px",background:"red",borderRadius:"5px",display:my}}>
            <p style={{color: "#fff",textAlign:"center"}}>your registiton is failed</p>
          </div>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={submit} >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register