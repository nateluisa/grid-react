import { Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import './index.css';
import { Container, Column, Row } from './components/Grid';
import LoginPage from './pages/LoginPage'


class App extends Component {
  render() {
    <Container>
         <Row>
           <Column mobile='6' tablet='12' desktop='6'>mobile 6 / tablet 12 / desktop 6</Column>
           <Column mobile='6' tablet='6' desktop='6'>mobile 6 / tablet 6 / desktop 6</Column>
           <Column mobile='12' tablet='6' desktop='12'>mobile 12 / tablet 6 / desktop 12</Column>
         </Row>
         
       </Container>
    return (
        
    
      
            <Routes>
       <Route path='/login' Component={ LoginPage }   />
     </Routes>
      
     
    );
  }
}

export default App;
