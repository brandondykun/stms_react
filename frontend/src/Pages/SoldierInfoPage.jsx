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
      {currentSoldier && (
        <div>
          <div>{currentSoldier.first_name}</div>
          <div>{currentSoldier.middle_name}</div>
          <div>{currentSoldier.last_name}</div>
          <div>Rank: {currentSoldier.rank}</div>
          <div>Grade: {currentSoldier.grade}</div>
          <div>PEBD: {currentSoldier.pebd}</div>
          <div>Date of Rank: {currentSoldier.date_of_rank}</div>
          <div>ETS: {currentSoldier.expiration_term_of_service}</div>
          <div>Section: {currentSoldier.section}</div>
          <div>Team: {currentSoldier.team}</div>
          <div>Role: {currentSoldier.role}</div>
          <div>ACFT: {currentSoldier.acft_score}</div>
          <div>M4 Qual: {currentSoldier.m4_qual}</div>
          <div>
            DLC 1 Complete: {currentSoldier.dlc_1_complete ? "True" : "False"}
          </div>
          <div>
            BLC Complete: {currentSoldier.blc_complete ? "True" : "False"}
          </div>
          <div>
            DLC 2 Complete: {currentSoldier.dlc_2_complete ? "True" : "False"}
          </div>
          <div>
            ALC Complete: {currentSoldier.alc_complete ? "True" : "False"}
          </div>
          <div>
            DLC 3 Complete: {currentSoldier.dlc_3_complete ? "True" : "False"}
          </div>
          <div>
            SLC Complete: {currentSoldier.slc_complete ? "True" : "False"}
          </div>
          <div>
            JFO Qualified: {currentSoldier.jfo_qualified ? "True" : "False"}
          </div>
          <div>
            Drivers License: {currentSoldier.drivers_license ? "True" : "False"}
          </div>
        </div>
      )}
      <Link to={`/soldier-info/${id}/comments`}>View Comments</Link>
    </div>
  );
};

export default SoldierInfoPage;
