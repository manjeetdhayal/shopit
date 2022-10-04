import React from 'react'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import { Container} from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreens'; 

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  return (

    <Router>
    
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
               {/* <Route path='/' exact > <HomeScreen/> </Route> */}
               <Route path='/' element= {<HomeScreen/>} exact/>
               <Route path='/product/:id' element= { <ProductScreen/>}/>
               <Route exact path='/cart/' element={<CartScreen/>} />
               <Route exact path='/cart/:id' element={<CartScreen/>} /> 
               {/* '/cart/:id?' ? implies that :id parameter is optional, even if it is not present we will route the cart link */}
               <Route path = "*" element= {<div> hello </div>} />
          </Routes>
         
          </Container>
     
      </main>

     <Footer/>


    </Router>
    
  );
}

export default App;
