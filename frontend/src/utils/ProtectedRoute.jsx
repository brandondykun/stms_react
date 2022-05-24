import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  userId,
  redirectPath = "/login",
  children,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="primary-content">
        <h2>LOADING...</h2>
      </div>
    );
  }
  if (!userId) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
