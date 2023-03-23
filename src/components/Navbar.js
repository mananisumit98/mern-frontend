import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userRoutes } from '../utils/constants/routes';
import { LOGIN, REGISTER, HOMEPAGE, DASHBOARD } from '../utils/constants/urls';

const Navbar = () => {

    const isAuthorised = localStorage.getItem("auth_token") ? true : false;
    const router = window.location.pathname;
    const navigate = useNavigate();

    useEffect(() => {
        if ((!isAuthorised && router === "/about") || (!isAuthorised && router === "/dashboard") || (!isAuthorised && router === "/contact-us")) {
            navigate(HOMEPAGE);
        }

        if ((isAuthorised && router === "/login") || (isAuthorised && router === "/register")) {
            navigate(DASHBOARD);
        }

    }, [])

    const logout = () => {
        localStorage.removeItem("auth_token");
        navigate(HOMEPAGE);
    }

    return (
        <div className='flex-row'>

            {/* Routes which are accessible only after Login */}
            {userRoutes.map((routes) => {
                return (
                    <div>
                        <Link to={routes.path}>{routes.name}</Link>
                    </div>
                )
            })
            }
            {!isAuthorised && (
                <div>
                    <Link to={LOGIN}>Login</Link>
                </div>
            )}
            {!isAuthorised && (
                <div>
                    <Link to={REGISTER}>Register</Link>
                </div>
            )}
            {isAuthorised && (
                <div>
                    <Link to={HOMEPAGE}>
                        <span onClick={logout}>Logout</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar