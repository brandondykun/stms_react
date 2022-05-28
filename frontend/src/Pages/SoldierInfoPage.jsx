import { useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apiCalls from "../apiCalls/apiCalls";
import SoldierDetails from "../Components/SoldierDetails";

const SoldierInfoPage = ({ loggedInSoldier }) => {
  const [currentSoldier, setCurrentSoldier] = useState();
  const [loggedInSoldierCanViewComments, setLoggedInSoldierCanViewComments] =
    useState(false);
  const { id } = useParams();

  useEffect(() => {
    apiCalls.getSoldierById(id).then((res) => {
      if (res.status === 200) {
        setCurrentSoldier(res.data);
        if (loggedInSoldier.is_leader || res.data.id === loggedInSoldier.id) {
          setLoggedInSoldierCanViewComments(true);
        }
      }
    });
  }, [id]);

  return (
    <div className="primary-content">
      {currentSoldier && (
        <h1 className="page-title">
          {currentSoldier.rank} {currentSoldier.first_name}{" "}
          {currentSoldier.last_name}
        </h1>
      )}
      {currentSoldier && loggedInSoldierCanViewComments && (
        <div className="text-link-container">
          <Link className="text-link" to={`/soldier-info/${id}/comments`}>
            {loggedInSoldier.id === parseInt(id)
              ? "View My Performance Comments >>"
              : "View Performance Comments >>"}
          </Link>
        </div>
      )}
      {currentSoldier && (
        <SoldierDetails
          currentSoldier={currentSoldier}
          setCurrentSoldier={setCurrentSoldier}
          loggedInSoldier={loggedInSoldier}
        />
      )}
      {/* {currentSoldier && loggedInSoldierCanViewComments && (
        <Link to={`/soldier-info/${id}/comments`}>View Comments</Link>
      )} */}
    </div>
  );
};

export default SoldierInfoPage;
