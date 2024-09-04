import petmd from '../assets/petmd.png';
import catcafe from '../assets/catcafe.png';
import phone from '../assets/phone.png';
import lazerkitty from '../assets/lazerkitty.png';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <div className="container1">
      
      <div className="box1">
        <h1 className="text1">Hi I'm Jaclyn</h1>
        <h2 className="text2">A Software Developer with hands-on experience in React, Python, JavaScript, FastAPI, HTML5, CSS and SQL. Skilled in building and maintaining web applications, with a strong foundation in both front-end and back-end development. </h2>
        <img
                className="react"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="react logo"
              />
               <img
                className="vite"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                alt="vite logo"
              />
              <img
                className="javascript"
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                alt="javascript logo"
              />
              <img
                className="python"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
              />
              <img
              className="fastapi"
                src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
              /> 
              <img 
              className="supabase"
              src="https://pipedream.com/s.v0/app_1dBhP3/logo/96"/>
        </div>



      <div className="box2"> <img
            className="img"
            src="https://i.postimg.cc/Qtg8DqR9/20230506-000504-1.jpg"
            alt="picture of Jaclyn Alday"
          /></div>
      
    </div>
    
  <div className='under_container'>
    <div className="under_container1">
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={petmd} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item">
      <img src={catcafe} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item">
      <img src={phone} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item">
      <img src={lazerkitty} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
  
   

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className='under_container2'><h2 className='title2' >Projects</h2>
<h4 className='textp'>
  Click through the carousel to see some of my projects, and visit the <Link className='link2' to="/projects">projects</Link> page to see more!
</h4>
<h4></h4>
</div>
</div>
    </>
  );
}

export default Home;