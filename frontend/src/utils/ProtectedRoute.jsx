import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  redirectPath = "/login",
  children,
  isLoading,
  loggedInSoldier,
}) => {
  if (isLoading) {
    return (
      <div className="primary-content">
        <h2>LOADING...</h2>
      </div>
    );
  }
  if (!loggedInSoldier) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
