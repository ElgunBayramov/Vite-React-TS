import Navbar from './layout/Navbar';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
function App() {


return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pages' element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
