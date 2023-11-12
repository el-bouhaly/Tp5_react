import './NavBar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
 return (

 <div className="nav-top">
 <Link to="/">Calculatrice</Link>
 <Link to="/Slider">Slider</Link>
 <Link to="/Appp">Todo-List</Link>
 <Link to="/Api">Call API</Link>
 
 
 
 
 </div>
 )
}