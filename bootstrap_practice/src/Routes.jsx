import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Petmd from './pages/Petmd';
import Catcafe from './pages/Catcafe';
import Movie from './pages/Movie';
import ShooterKitty from './pages/ShooterKitty';
import Phonebook from './pages/Phonebook';
import Disney from './pages/Disney';




const router = createBrowserRouter([

    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/projects",
                element: <Projects/>,
            },
            {
                path: "/petmd",
                element: <Petmd/>,
            },
            {
                path:"/catcafe" ,
                element:<Catcafe/> ,

            },
            {
                path:"/movie-lookup" ,
                element:<Movie/> ,
            },
            {
                path:"/shooterkitty" ,
                element:<ShooterKitty/> ,
            }, 
            {
                path:"/phonebook",
                element:<Phonebook/>,
            },
            {
                path:"/disney",
                element:<Disney/>,
            }

        ]
    }

]

)

function RouterFunc() {
    return (
      <>
    <RouterProvider router = {router}/>
      
   
      </>
    )
  }
  
  export default RouterFunc