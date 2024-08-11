
import { Link } from "react-router-dom";
import { useState } from "react";






const NavBar = () => {










  return (





<nav className="navbar bg-dark navbar-expand-lg bg-body-" >
  <div className="container-fluid">
    <a className="logo" href="/"><img className="logo" src="https://images.vexels.com/content/301500/preview/tropical-nature-letter-j-alphabet-b9ad36.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>



   



  );
};

export default NavBar;





{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="nav-link" href="/contact">Contact</a></li>
            <li><a className="dropdown-item" href="/about">About</a></li>
            <li><a className="dropdown-item" href="/projects">Projects</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  
</nav>  */}





