import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import UseAuth from '../Custom-hooks/UseAuth'


const ProtectedRoute = () => {

    const { currentUser } = UseAuth()

  return currentUser ? <Outlet/> : <Navigate to='/login' />
}

export default ProtectedRoute