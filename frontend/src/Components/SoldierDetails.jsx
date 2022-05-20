const SoldierDetails = ({ currentSoldier }) => {
  return (
    <div>
      <h2>
        {currentSoldier.rank} {currentSoldier.first_name}{" "}
        {currentSoldier.middle_name} {currentSoldier.last_name}
      </h2>
      <div className="soldier-details-container">
        <div className="soldier-details-container-title">Assignment</div>
        <div className="soldier-details-info-container">
          <div>Grade: {currentSoldier.grade}</div>
          <div>Section: {currentSoldier.section}</div>
          <div>Team: {currentSoldier.team}</div>
          <div>Role: {currentSoldier.role}</div>
        </div>
      </div>

      <div className="soldier-details-container">
        <div className="soldier-details-container-title">Dates</div>
        <div className="soldier-details-info-container">
          <div>PEBD: {currentSoldier.pebd}</div>
          <div>Date of Rank: {currentSoldier.date_of_rank}</div>
          <div>ETS: {currentSoldier.expiration_term_of_service}</div>
        </div>
      </div>
      <div className="soldier-details-container">
        <div className="soldier-details-container-title">Scores</div>
        <div className="soldier-details-info-container">
          <div>ACFT: {currentSoldier.acft_score}</div>
          <div>M4 Qual: {currentSoldier.m4_qual}</div>
        </div>
      </div>

      <div className="soldier-details-container">
        <div className="soldier-details-container-title">
          Military Education
        </div>
        <div className="soldier-details-info-container">
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
      </div>
    </div>
  );
};

export default SoldierDetails;
