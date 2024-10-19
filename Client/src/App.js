
import './Css/bootstrap-5/css/bootstrap.min.css'
import './Css/font-awesome-4.7/css/font-awesome.min.css'
import './Css/mystyle.css'
import {Route, Routes} from "react-router-dom"
import Index from './components/Pages/Main/Index';
import Header from './components/Pages/SharedLayout/Header/Header';
import Register from './components/Pages/UserPage/Register';
import Login from './components/Pages/UserPage/Login';
import Footer from './components/Pages/SharedLayout/Footer/Footer';
import CommonLayout from './components/Pages/SharedLayout/CommonLayout';
import Fouro4 from './components/ErorrPage/Fouro4';
import PostJob from './components/Pages/JobPage/PostJob';
import ManageJob from './components/Pages/JobPage/ManageJob';
import UpdateJob from './components/Pages/JobPage/UpdateJob';


function App() {
  return (

   <Routes>
    <Route path='/' element={<CommonLayout/>}>   
      <Route path='/' element={<Index/>}/>
      <Route path='/PostJob/' element={<PostJob/>}/>  
      <Route path='/ManageJob/' element={<ManageJob/>  }/>   
      {/* <Route path="/ManageJob/:JobID" element={<UpdateJob />} /> */}
      <Route path='/Register/' element={<Register/>}/>
      <Route path='/Login/' element={<Login/>}/>  
      <Route path='*' element={<Fouro4/>}/>  
     



     
       

      
    </Route>    
   </Routes>
  
  );
}
export default App;
