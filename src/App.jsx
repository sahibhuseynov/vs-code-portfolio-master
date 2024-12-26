import React, { useState,lazy,Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Explorer from './components/Explorer/Explorer';
import Footer from './components/Footer/Footer';
import Tabs from "./components/Tabs/Tabs";
import Home from './pages/Home';
import Terminal from "./components/Terminal/Terminal";
const About = React.lazy(() => import('./pages/About/About'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const Package = React.lazy(() => import('./pages/Package/Package'));
const Window = React.lazy(() => import('./pages/Window/Window'));



const Layout = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  return (
    <div className='layout'>
        <Navbar isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen}/>
        <div className="main__content">
            <Sidebar />
            <Explorer />
            <div className="page__control">
                <Tabs />
                <div className="outlet">
                <Suspense fallback={<div>...</div>}>
                  <Outlet/>
                  {
                    isTerminalOpen && <div className='terminal' ><Terminal isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen} /></div>
                  }
                   </Suspense>
                  </div>
               
            </div>
        </div>
        <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/package", element: <Package /> },
    ]
  },
  {
    path: "/window",
    element:(
      <Suspense fallback={<div>...</div>}>
        <Window />
      </Suspense>
    )
  }
  
]);
 


function App() {
  return <RouterProvider router={router} />
}

export default App;
