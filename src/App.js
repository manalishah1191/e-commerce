import './App.css';
import { Navbar } from './component/layout/header/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/pages/Home';
import Shop_page from './component/pages/Shop_page';
import Featured from './component/pages/Featured';
import Recommended from './component/pages/Recommended'
import Footer from './component/layout/Footer/Footer';
import Top_content from './component/layout/Body/Top_content';
import Featured_product from './component/layout/Body/Featured_product';
import Recommended_product from './component/layout/Body/Recommended_product';
//import Shop_page from './component/pages/Shop_page';
import { BsCartPlusFill } from "react-icons/fa";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/Shop_page' exact element={<Shop_page/>}/>
    <Route path='/Featured' exact element={<Featured/>}/>
    <Route path='/Recommended' exact element={<Recommended/>}/>
    </Routes>
    <Footer/>
    </Router>
    
    </>      
  );
}

export default App;
