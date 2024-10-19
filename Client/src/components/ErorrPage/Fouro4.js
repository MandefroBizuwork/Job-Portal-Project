import React from 'react'
import './foro4.css'
import { Link } from 'react-router-dom'

const Fouro4 = () => {
  return (
    <>
       <div className="error-container"> 
        <h1> 404 </h1> 
        <p> 
            Oops! The page you're 
            looking for is not found. 
        </p> 
        <Link to="/"> 
            Go Back to Home 
        </Link> 
    </div> 
    </>
  )
}

export default Fouro4
