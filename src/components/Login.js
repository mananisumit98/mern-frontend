import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    let url = "http://localhost:8080/users/login";

    const navigate = useNavigate();

    const onSubmit = async (data) => {

        let postData = axios.post(url, data);
        let response = await postData;

        const { message, status, response: resObj } = response.data;

        if (response.status === 200) {

            toast.success(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (status === "SUCCESS") {
            localStorage.setItem("auth_token", resObj.auth_token)
            setValue("email_id", "");
            setValue("password", "");
            navigate('/dashboard');
        }
    }

    return (
        <div className='login'>
            <Navbar />

            <div className='main-screen flex-column'>
                <div>
                    <h1>Login Form</h1>
                </div>

                <div className='mt-20'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            {/* <label className='mt-20' htmlFor='email_id' id='email_id'>Username / Email: </label> */}
                            <input
                                type='text'
                                placeholder='User name / email'
                                className='textbox mt-20'
                                {...register("email_id", { required: true })}
                            />
                            {errors.email_id && errors.email_id.type === 'required' && <span className='error-message'>
                                Enter valid Email Address</span>}
                        </div>

                        <div className='mt-20'>
                            {/* <label className='mt-20' htmlFor='password' id='password'>Password: </label> */}
                            <input
                                type='password'
                                placeholder='Password'
                                className='textbox mt-20'
                                {...register("password", { required: true })}
                            />
                            {errors.password && errors.password.type === 'required' && <span className='error-message'>
                                Enter valid Password</span>}

                            <input type="submit" className='button' />
                        </div>
                        <ToastContainer />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;