import { Navigate, Outlet } from "react-router-dom";

const NoAccountRoute = ({
  redirectPath = "/home",
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
  if (loggedInSoldier.first_name) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default NoAccountRoute;
