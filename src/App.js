
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import TrangChu from "./components/TrangChu";
import GoogleMap from "./components/googleMap";
function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<TrangChu/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Map" element ={<GoogleMap/>}/>
        </Routes>
        <Footer />
     
      
      
    </div>
  );
}

export default App;
