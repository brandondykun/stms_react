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
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminRoute from "./utils/AdminRoute";
import jwt_decode from "jwt-decode";
import apiCalls from "./apiCalls/apiCalls";

function App() {
  const [userId, setUserId] = useState();
  const [loggedInSoldier, setLoggedInSoldier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIfUserLoggedIn = async () => {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (tokens) {
        const accessToken = tokens.access;
        const decodedToken = jwt_decode(accessToken);
        setUserId(decodedToken.user_id);
        const user = await apiCalls.getUserById(decodedToken.user_id);
        if (user.status === 200) {
          const soldier_id = user.data.soldier;

          const soldier = await apiCalls.getSoldierById(soldier_id);
          if (soldier.status === 200) {
            setLoggedInSoldier(soldier.data);
          }
        }
      }
      setIsLoading(false);
    };
    checkIfUserLoggedIn();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          setLoggedInSoldier={setLoggedInSoldier}
          setUserId={setUserId}
          userId={userId}
          loggedInSoldier={loggedInSoldier}
        />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                setUserId={setUserId}
                setLoggedInSoldier={setLoggedInSoldier}
              />
            }
          />
          <Route
            element={<ProtectedRoute userId={userId} isLoading={isLoading} />}
          >
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/my-info"
              element={
                <MyInfoPage
                  loggedInSoldier={loggedInSoldier}
                  setLoggedInSoldier={setLoggedInSoldier}
                />
              }
            />

            <Route path="/soldier-info/:id" element={<SoldierInfoPage />} />
            <Route
              path="/soldier-info/:id/comments"
              element={<CommentsPage loggedInSoldier={loggedInSoldier} />}
            />
            <Route path="/create-account/:id" element={<CreateAccountPage />} />
          </Route>
          <Route
            element={
              <AdminRoute
                loggedInSoldier={loggedInSoldier}
                isLoading={isLoading}
              />
            }
          >
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
