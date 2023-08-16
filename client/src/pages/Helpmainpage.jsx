import React from 'react'
import MainNavbar from './MainNavbar';
import './helpmainpage.css'
import Footer from '../components/Footer';

const Helpmainpage = () => {
    return( 
        <>
        <MainNavbar/>
        <h1 className='header'>Customer Service</h1>
        <nav aria-label="breadcrumb " className='navbar-gyi'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Customer Service</li>
  </ol>
</nav>
<h1 className='header1'>How can we help you today?</h1>
        <form className="row g-3 form-className">
  
  <div className="col-auto">
    <input type="text" className="form-control input-tag" id="inputPassword2" placeholder="Search eBay help..." />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 search"><i className="fa-solid fa-magnifying-glass"></i></button>
  </div>
</form>

<div className='container-gyi'>
        <div className='first-container'>
            <h3>Get personalized help and see<br/>
            your recent orders</h3>
            <a href="/login" className='a1'> <button type="submit" className="btn btn-primary mb-3">Sign in</button></a>
<div>
<p>Don't have an account?</p>
            <a href="/register">Register now --</a>
</div>
           
           

        </div>
        <div className='second-container'>
            <div className="second-container1">
                <div className="second-container11">
                    <h2>Buying as a guest</h2>
                    <p>popular articles</p>
                </div>
                <div className="second-container12">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="second-container2">
                <div className="second-container11">
                <h2>Get help with an item that <br/>hasn't arrived</h2>
                    <p>popular articles</p>
                </div>
                <div className="second-container22">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="second-container3">
                <div className="second-container11">
                <h2>Get help with a hacked<br/> account</h2>
                    <p>popular articles</p>
                </div>
                <div className="second-container32">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <div className='second-container'>
            <div className="second-container1">
                <div className="second-container11">
                    <h2>Get help if you bought as<br/> a guest</h2>
                    <p>popular articles</p>
                </div>
                <div className="second-container51">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="second-container2">
                <div className="second-container11">
                <h2>Singing up for an eBay<br/> acccount</h2>
                    <p>popular articles</p>
                </div>
                <div className="second-container52">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="second-container3">
                <div className="second-container11">
                <h2>Reset your password</h2>
                    <p>popular articles</p>
                </div>
                <div className="second-container53">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
</div>
<div className="help-container">
    <h1>Need more help?</h1>
    <div className="help-first-container">
        <div className='div1'>
        <i className="fa-solid fa-comment-sms"></i>
        </div>
        <div className='div2'>
            <h3>Contact us</h3>
            <p>Get the help you need from our automated assistant, or contact an agent
            <a href="/contactmainpage"><i className="fa-solid fa-arrow-right arrow"></i></a>
</p>

        </div>
    </div>
</div>

<Footer/>

        </>
    )
}
export default Helpmainpage;
