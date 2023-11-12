import logo from './logo.svg';
// import React,{useState} from 'react';
import Api from './com/Api';
import Slider from './com/Slider';
import Calc from './com/Calc';
import { Routes,Route } from 'react-router-dom';
import Navbar from './com/NavBar';
import Appp from './com/Appp';
function App() {
  
  
  return (
    <div >
      <Navbar />  
     <Routes>
      <Route path='/' element={<Calc/>}/>
      <Route path='/Slider' element={<Slider/>}/>
      <Route path='/Appp' element={<Appp/>}/>
      <Route path='/Api' element={<Api/>}/>
      <Route path="*"  element={<h1 className='h404'>404</h1>} />
     </Routes>
     
     </div>
     
  );
}

export default App;
