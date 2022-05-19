import { useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apiCalls from "../apiCalls/apiCalls";

const SoldierInfoPage = () => {
  const [currentSoldier, setCurrentSoldier] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiCalls.getSoldierById(id).then((res) => {
      if (res.status === 200) {
        setCurrentSoldier(res.data);
      }
    });
  }, [id]);

  return (
    <div className="primary-content">
      <div>Soldier {id} info page</div>
      {currentSoldier && <div>{currentSoldier.first_name}</div>}
      <Link to={`/soldier-info/${id}/comments`}>View Comments</Link>
    </div>
  );
};

export default SoldierInfoPage;
