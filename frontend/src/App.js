import "./App.css";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import MyInfoPage from "./Pages/MyInfoPage";
import AdminPage from "./Pages/AdminPage";
import SoldierInfoPage from "./Pages/SoldierInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/my-info" element={<MyInfoPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/soldier-info/:id" element={<SoldierInfoPage />} />
          <Route path="/create-account/:id" element={<CreateAccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
