
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Header/Home";

function App() {
  return (
    <div className="">
 <Router>
  <Routes>

    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>



  </Routes>
 </Router>
    </div>
  );
}

export default App;
