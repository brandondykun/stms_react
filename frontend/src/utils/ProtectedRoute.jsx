import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ userId, redirectPath = "/login", children }) => {
  if (!userId) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
