import React, { useContext } from 'react'
import { AppState } from "../../../App";
function CustomerPage() {
    const {logout}=useContext(AppState)
  return (
    <div>
      <h1>Welcome to customer page</h1>
    <button onClick={logout} >logout</button>
    </div>
  )
}

export default CustomerPage
