import { Link } from "react-router-dom";
import SoldierDetails from "../Components/SoldierDetails";

const MyInfoPage = ({ loggedInSoldier, setLoggedInSoldier }) => {
  const linkText = "View My Performance Comments >>";

  return (
    <div className="primary-content">
      <h1 className="page-title">My Info</h1>
      <Link
        className="text-link"
        to={`/soldier-info/${loggedInSoldier.id}/comments`}
      >
        {linkText}
      </Link>
      <SoldierDetails
        currentSoldier={loggedInSoldier}
        setCurrentSoldier={setLoggedInSoldier}
        loggedInSoldier={loggedInSoldier}
      />
    </div>
  );
};

export default MyInfoPage;
