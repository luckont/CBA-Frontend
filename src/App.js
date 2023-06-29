import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BussinessPage from "./pages/BussinessPage/BussinessPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import EventPage from "./pages/EventPage/EventPage";
import Footer from "./Components/Footer/Footer";
import UpdatePage from "./pages/BussinessPage/UpdatePage";

function App() {
  return (
    <Router >
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<IntroPage />} />
          <Route path="/su-kien" element={<EventPage/>} />
          <Route path="/thanh-vien" element={<BussinessPage />} />
          <Route path="/cap-nhat-thanh-vien" element={<UpdatePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
