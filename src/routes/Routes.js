import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../pages/LoginPage'

const Routes = () => {
   return(
       <Routes>
         <Route path="/login" element={ <LoginPage/> }/>
       </Routes>
   )
}

export default Routes;