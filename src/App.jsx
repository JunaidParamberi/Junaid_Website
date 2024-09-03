import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Leyout from './components/Leyout';
import Home from './Pages/Home';
import ProjectsPage from './Pages/ProjectsPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import './App.css';
import ErrorPage from './Pages/ErrorPage';
import LinearProgress from '@mui/material/LinearProgress';
import ProjectDetailsPage from './Pages/ProjectDetailsPage';
import LoadingPage from './components/LoadingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000); // 2000ms = 2 seconds
  
    return () => {
      clearTimeout(timer); // Clean up the timeout if the component unmounts
      setIsMounted(false);
    };
  }, []);
  
 
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setProgress(0);

      const loadingTime = 1000;
      const interval = 50;
      const progressStep = 100 / (loadingTime / interval);

      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + progressStep;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return newProgress;
        });
      }, interval);

      setTimeout(() => {
        setLoading(false);
        setProgress(100);
        clearInterval(progressInterval);
      }, loadingTime);
    };

    handleRouteChange();

    return () => {
      setLoading(false);
    };
  }, [location]);

  useEffect(() => {
    const updateTitle = () => {
      let pathnameText = "";
      if (location.pathname === "/") {
        pathnameText = "Home";
      } else if (location.pathname === "/about") {
        pathnameText = "About Us";
      } else if (location.pathname === "/projects") {
        pathnameText = "Projects";
      } else if (location.pathname === "/contact") {
        pathnameText = "Contact Us";
      }

      const title = document.querySelector("title");
      if (title) {
        title.innerText = pathnameText
          ? `${pathnameText} | Junaid Paramberi`
          : "Junaid Paramberi";
      }
    };

    updateTitle();
  }, [location.pathname]);

  // if(isMounted){
  //   return <LoadingPage/>
  // }

 

  return (
    <div className={`app ${isMounted ? "active" : ""} `}>
     
    

      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailsPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      
    
    </div>
  );
}

export default App;
