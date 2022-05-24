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
import CommentsPage from "./Pages/CommentsPage";
import { useState } from "react";
import Footer from "./Components/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setUser={setUser} setUserId={setUserId} userId={userId} />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={<LoginPage setUserId={setUserId} setUser={setUser} />}
          />
          <Route element={<ProtectedRoute userId={userId} />}>
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/my-info"
              element={<MyInfoPage user={user} setUser={setUser} />}
            />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/soldier-info/:id" element={<SoldierInfoPage />} />
            <Route
              path="/soldier-info/:id/comments"
              element={<CommentsPage userId={userId} />}
            />
            <Route path="/create-account/:id" element={<CreateAccountPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
