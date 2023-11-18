import logo from './logo.svg';
import React from 'react';
// import React,{useState} from 'react';
import Api from './com/Api';
import Slider from './com/Slider';
import Calc from './com/Calc';
import { Routes,Route } from 'react-router-dom';
import BasicExample from './com/BasicExample';
import Appp from './com/Appp';
import Lang from './Lang'

function App() {
  
  
  return (
    <div >
    {/* <Lang/> */}
    
      <BasicExample />  
     <Routes>
      <Route path='/' element={<Lang/>}/>
      <Route path='/Calc' element={<Calc/>}/>
      <Route path='/Slider' element={<Slider/>}/>
      <Route path='/Appp' element={<Appp/>}/>
      <Route path='/Api' element={<Api/>}/>
      <Route path="*"  element={<h1 className='h404'>404</h1>} />
     </Routes>
     
     </div>
     
  );
}

export default App;
