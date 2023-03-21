import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const isAuthorised = localStorage.getItem("auth_token") ? true : false;
    const router = window.location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if ((!isAuthorised && router === "/about") || (!isAuthorised && router === "/dashboard") || (!isAuthorised && router === "/contact-us")) {
            navigate("/");
        }

        if ((isAuthorised && router === "/login") || (isAuthorised && router === "/register")) {
            navigate("/dashboard");
        }

    }, [])

    const logout = () => {
        console.log("INNNNNNNNNN")
        localStorage.setItem("auth_token", "")
        navigate("/");
    }

    return (
        <div className='flex-row'>
            <div>
                <Link className='Link' to="/dashboard">Dashboard</Link>
            </div>
            <div>
                <Link className='Link' to="/about">About</Link>
            </div>
            <div>
                <Link className='Link' to="/contact-us">Contact Us</Link>
            </div>
            {!isAuthorised && (
                <div>
                    <Link className='Link' to="/login">Login</Link>
                </div>
            )}
            {!isAuthorised && (
                <div>
                    <Link className='Link' to="/register">Register</Link>
                </div>
            )}
            {isAuthorised && (
                <div>
                    <Link className='Link' to="/">
                        <span onClick={logout}>Logout</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar