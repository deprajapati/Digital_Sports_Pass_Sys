import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Chatbot from './Chatbot'


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Chatbot />
    </>
  )
}

export default Layout
