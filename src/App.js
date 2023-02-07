
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import TrangChu from "./components/TrangChu";
import GoogleMap from "./components/googleMap";
import Login from "./components/Login";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuxsCvZ8kHhxiOaoVyLlbBSqGVAMPj86M",
  authDomain: "ecommer-e6bf9.firebaseapp.com",
  projectId: "ecommer-e6bf9",
  storageBucket: "ecommer-e6bf9.appspot.com",
  messagingSenderId: "360484809950",
  appId: "1:360484809950:web:bfed19a601b425fd0d664f",
  measurementId: "G-BR8YK2CPJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<TrangChu/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Map" element ={<GoogleMap/>}/>
        <Route path="/Login" element ={<Login/>}/>
        </Routes>
        <Footer />
     
      
      
    </div>
  );
}

export default App;
