import { Link } from "react-router-dom";




const Projects = () => {
  return (
    <div>
      <div className="projects-container">


        {/* need to change this ahhhh */}

<Link to ="/petmd" className="project-link">
        <div className="project1">
         <img className="img2" src="https://i.postimg.cc/7671W5Tv/Screen-Shot-2024-06-05-at-12-10-50-PM.png" alt="project1" />
        </div>
        </Link>

<Link to ="/catcafe" className="project-link">
        <div className="project2">
          <img className="img2" src="https://i.postimg.cc/BQvSw4nq/Screen-Shot-2024-06-02-at-2-29-35-PM.png" alt="project2" />
        </div>
        </Link>


<Link to ="/movie-lookup" >
        <div className="project3">
          <img className="img2" src="https://i.postimg.cc/HnccTxQm/movie-lookup.png" alt="project3" />
        </div>
        </Link>


<Link to ="/shooterkitty">
        <div className="project4">
          <img className="img2" src="https://i.postimg.cc/T1tJxrkS/Screen-Shot-2024-06-05-at-11-57-03-AM.png" alt="project4" />
        </div>
        </Link>

<Link to ="/phonebook">
        <div className="project5">
          <img className="img2" src="https://i.postimg.cc/5tVdfpWK/Screen-Shot-2024-08-08-at-1-50-56-PM.png" alt="project5" />
        </div>
        </Link>

<Link to ="/disney">
        <div className="project6">
          <img className="img2" src="https://i.postimg.cc/d3vXm7Qr/Screen-Shot-2024-08-10-at-3-33-49-PM.png" alt="project6" />
        </div>
        </Link>


      </div>
      
    </div>
  );
}


export default Projects;