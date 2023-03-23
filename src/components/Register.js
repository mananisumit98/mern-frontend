import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Register = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    let url = "http://localhost:8080/users";

    const onSubmit = async (data) => {
        let postData = axios.post(url, data);
        let response = await postData;

        const { message } = response.data;

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

            setValue("username", "");
            setValue("email_id", "");
            setValue("password", "");

        }
    }

    let textboxStyle = { height: "25px", width: "300px", paddingLeft: "15px", display: "block", margin: "0 0 10px 0" };
    let errorStyle = { display: "block", margin: "0 0 5px 0", color: "red" };
    let ButtonStyle = { height: "30px", width: "100px" };

    return (
        <div>
            <Navbar />

            <div className='main-screen flex-column'>
                <h1>Registration Form</h1>

                <form className='mt-20' onSubmit={handleSubmit(onSubmit)}>
                    <label className='mt-20' htmlFor='username' id='username' >Username: </label>
                    <input
                        type='text'
                        placeholder='username'
                        className='textbox mt-10'
                        {...register("username", { required: true })}
                    />
                    {errors.username && errors.username.type === 'required' && <span className='error-message'>
                        Enter valid Username</span>}

                    <label className='mt-20' htmlFor='email_id' id='email_id'>Email_id: </label>
                    <input
                        type='email'
                        placeholder='email address'
                        className='textbox mt-10'
                        {...register("email_id", { required: true })}
                    />
                    {errors.email_id && errors.email_id.type === 'required' && <span className='error-message'>
                        Enter valid Email Address</span>}

                    <label className='mt-20' htmlFor='password' id='password'>Password: </label>
                    <input
                        type='password'
                        placeholder='password'
                        className='textbox mt-10'
                        {...register("password", { required: true })}
                    />
                    {errors.password && errors.password.type === 'required' && <span className='error-message'>
                        Enter valid Password</span>}

                    <input type="submit" className='button' />
                    <ToastContainer />

                </form>
            </div>
        </div>
    )
}

export default Register;