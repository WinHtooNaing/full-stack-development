import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Navbar = () => {
    const state = useSelector(state => state.handleCart)
   
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center" style={{display: "flex" , flexDirection: "row" }}>
                        <NavLink to="/user" style={{display: "flex" , flexDirection: "row", marginRight: "120px", alignItems: "center",textDecoration:"none"}}>
                        <i class="fa-solid fa-user " style={{marginRight:"5px" , fontSize: "20px",border: "1px solid blue"
                    , borderRadius: "50%", padding : "5px"}}></i>
                <p style={{fontSize: "20px" , marginTop: "10px",color: "#222"}}>Hi,user</p>
                        </NavLink>
                  
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                        <NavLink to="/mainpage" className="btn btn-outline-dark m-2"><i class="fa-solid fa-right-to-bracket fa-rotate-180 mr-1"></i> Logout</NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar

/* 
<NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink> 
                        */