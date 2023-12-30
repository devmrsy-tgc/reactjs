import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './app'
import './style.css'
import AddCardItem from './components/validateStock';
import Practice from './practice/practice_1';
import UserData from './components/conditional';
import { Form, Form1, Form2 } from './components/form'; // destructuring

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
    (<>
        {/* <AddCardItem />
        <UserData /> */}
        {/* <Form1 />
        <Form2 /> */}
        <Form />
    </>)