import { Navigate, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const StaffOrSelfRoute = ({
  loggedInSoldier,
  redirectPath = "/home",
  children,
  isLoading,
}) => {
  const { id } = useParams();

  if (isLoading) {
    return (
      <div className="primary-content">
        <h2>LOADING...</h2>
      </div>
    );
  }
  if (!loggedInSoldier.is_staff && loggedInSoldier.id !== parseInt(id)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default StaffOrSelfRoute;
