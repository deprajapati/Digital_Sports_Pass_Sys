import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Registration from './Registration';
import Members from './Members';
import IdCard from './IdCard';
import Validation from './Validation';
import Chatbot from './Chatbot';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='Home' element={<Home/>}/>
      <Route path='members' element={<Members/>}/>
      <Route path='id-card' element={<IdCard/>}/>
      <Route path='Registration' element={<Registration/>}/>
      <Route path='Validation' element={<Validation/>}/>
      <Route path='Chatbot' element={<Chatbot/>}/>
      </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
