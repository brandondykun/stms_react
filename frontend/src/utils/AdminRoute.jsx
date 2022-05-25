import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ user, redirectPath = "/home", children, isLoading }) => {
  if (isLoading) {
    return (
      <div className="primary-content">
        <h2>LOADING...</h2>
      </div>
    );
  }
  if (!user.is_leader) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default AdminRoute;
