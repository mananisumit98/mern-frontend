import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import About from './components/About';
import ContactUs from './components/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />}></Route>
        <Route index path='register' element={<Register />}></Route>
        <Route index path='login' element={<Login />}></Route>
        <Route index path='dashboard' element={<Dashboard />}></Route>
        <Route index path='about' element={<About />}></Route>
        <Route index path='contact-us' element={<ContactUs />}></Route>
        <Route index path='*' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);