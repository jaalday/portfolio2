
import { Link } from "react-router-dom";
import { useState } from "react";


// const menu_btn = document.querySelector(".hamburger");
// const mobile_menu = document.querySelector(".nav-mobile");
// menu_btn.addEventListener("click", () => {
//   menu_btn.classList.toggle("is-active");
//     mobile_menu.classList.toggle("is-active");
// });




const NavBar = () => {


const [isActive, setActive] = useState("false");
const handleToggle = () => {
    setActive(!isActive);
};




  return (
    <>
    <nav className="nav">
        <div className="logo">
            <Link to ="/"><img className="logo"src="https://images.vexels.com/content/301500/preview/tropical-nature-letter-j-alphabet-b9ad36.png" alt="logo" /></Link>
        </div>
      
       <div className="nav-text2">
          
       
          <Link className="nav-text" to="/about">About</Link>
      
          <Link className="nav-text" to="/contact">Contact</Link>
          <Link className="nav-text" to="/projects">Projects</Link>
 
          </div>
          <button className={`hamburger ${isActive ? 'is-active' : ''}`}
            onClick={handleToggle}
            >
    <div className="bar"></div>
  </button>
  <nav className={`nav-mobile ${isActive ? 'is-active' : ''}`}
            >
  {/* <Link className="nav-text" to="/about">About</Link> */}
  <a href="/contact" className="nav-text">Contact</a>
  <a href="/projects" className="nav-text">Projects</a>
  <a href="/about" className="nav-text">About</a>
      

  </nav>
          
   
  
    </nav>
 

  
  </>
  );
}

export default NavBar;