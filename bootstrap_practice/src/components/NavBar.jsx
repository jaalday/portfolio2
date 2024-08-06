
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="nav">
        <div className="logo">
            <Link to ="/"><img className="logo"src="https://static.vecteezy.com/system/resources/previews/036/443/250/original/neon-light-alphabet-letter-j-png.png" alt="logo" /></Link>
        </div>
      
       <div className="nav-text2">
          
       
          <Link className="nav-text" to="/about">About</Link>
      
          <Link className="nav-text" to="/contact">Contact</Link>
          <Link className="nav-text" to="/projects">Projects</Link>
          </div>
   
   
    </nav>
  );
}

export default NavBar;