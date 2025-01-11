import React, { useContext } from 'react'
import { AppState } from '../../App'
import { Navigate } from 'react-router-dom'

function RedirectingAuthenticated() {
    const {user}=useContext(AppState)

    if(!!user){

     return <Navigate to="/dashboard"/>
    }
   
   
 
}

export default RedirectingAuthenticated
