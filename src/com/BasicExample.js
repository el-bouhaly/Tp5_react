// BasicExample.js
import './NavBar.css'
import {Link} from 'react-router-dom'
export default function BasicExample() {
 return (

 <nav className="nav-top">
  
 <div className='div11'><Link to="/" id='link1' >Accueil</Link></div>
 <div className='div22'><Link to="Calc" id='link2' >Calculatrice</Link></div>
 <div className='div22'><Link to="/Slider" id='link2'>Slider</Link></div>
 <div className='div22'><Link to="/Appp" id='link3'>Todo-List</Link></div>
 <div className='div22'><Link to="/Api" id='link4'>Call API</Link></div>
 
 
 
 
 </nav>
 )
}