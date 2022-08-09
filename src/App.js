
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Header/Home";
import Allprojects from "./Components/Home/Projects/Allprojects";

import ProjectDetails from "./Components/Home/Projects/ProjectDetails";
import Projects from "./Components/Home/Projects/Projects";

function App() {
  return (
    <div className="">
 <Router>
  <Routes>

    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/project" element={<Projects/>}/>
  
    <Route path="/Allprojects" element={<Allprojects/>}/>
    <Route      path={`/about/:about`} element={<ProjectDetails/>}/>


  </Routes>
 </Router>
    </div>
  );
}

export default App;
