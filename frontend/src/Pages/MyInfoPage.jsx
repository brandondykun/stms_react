import { Link } from "react-router-dom";
import SoldierDetails from "../Components/SoldierDetails";

const MyInfoPage = ({ loggedInSoldier, setLoggedInSoldier }) => {
  return (
    <div className="primary-content">
      <h1>My Info</h1>
      <Link
        className="text-link"
        to={`/soldier-info/${loggedInSoldier.id}/comments`}
      >
        View My Performance Comments >>
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
