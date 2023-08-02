import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../Routers/Routers'

import AdminNav from '../../Admin/AdminNav'

const Layout = () => {

    const location = useLocation()

  return (
    <>
    {location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header/> }
        <div>
            <Routers/>
        </div>
    <Footer/>

    </>
    )
}

export default Layout