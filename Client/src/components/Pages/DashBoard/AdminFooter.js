import React from 'react'

const AdminFooter = ({sideBarOpen}) => {
  console.log(sideBarOpen)
  return (
    <div id="myfooter" className={`myfooter  ${sideBarOpen? "":"footerTogler"}`}>
    <footer >   
    <div class="copyright">
      © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
     <i> Designed by <a href="#">BootstrapMade</a></i>
    </div>
  </footer>
  </div>
    
  )
}

export default AdminFooter
