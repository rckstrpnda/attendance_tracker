import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/login';
import CreateAccount from './component/createAccount';
import Signup from './component/signup';
import ProfilePage from './component/profile';
import Scanner from './component/scanner';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route exact path='/' element={< CreateAccount />}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={< Signup />}></Route>
    <Route exact path='/profile' element={< ProfilePage />}></Route>
    <Route exact path='/scanner' element={< Scanner />}></Route>
</Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
