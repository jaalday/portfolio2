import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';




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