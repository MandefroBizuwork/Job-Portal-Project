import React from 'react'

const AdminFooter = () => {
  return (
    <div>
      <div className="container-fluid py-3 my-4 border-top bg-light fixed-bottom " style={{zIndex:"-1"}}>
        <div className="d-flex justify-content-center">
          <span>© 2024 Company, Inc</span>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="text-secondary" href="#">Twitter</a></li>
            <li className="ms-3"><a className="text-secondary" href="#">Instagram</a></li>
            <li className="ms-3"><a className="text-secondary" href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminFooter
