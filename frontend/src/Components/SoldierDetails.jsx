import { useState } from "react";
import apiCalls from "../apiCalls/apiCalls";
import RankAndDatesInfoBox from "./RankAndDatesInfoBox";
import ScoresInfoBox from "./ScoresInfoBox";
import MilitaryEducationBox from "./MilitaryEducationBox";

const SoldierDetails = ({
  currentSoldier,
  setCurrentSoldier,
  loggedInSoldier,
}) => {
  const [editSection, setEditSection] = useState(null);

  const handleChangeEditSection = (section) => {
    console.log(section);
    setEditSection(section);
  };

  return (
    <div>
      <h2>
        {currentSoldier.rank} {currentSoldier.first_name}{" "}
        {currentSoldier.middle_name} {currentSoldier.last_name}
      </h2>

      <div className="info-box-container">
        <div className="info-box-title with-edit-button">
          <div className="info-box-title-text">Assignment</div>
        </div>

        <div className="info-box-content-container">
          <div>Section: {currentSoldier.section}</div>
          <div>Team: {currentSoldier.team}</div>
          <div>Role: {currentSoldier.role}</div>
        </div>
      </div>

      <RankAndDatesInfoBox
        currentSoldier={currentSoldier}
        setCurrentSoldier={setCurrentSoldier}
        editSection={editSection}
        setEditSection={setEditSection}
        handleChangeEditSection={handleChangeEditSection}
        loggedInSoldier={loggedInSoldier}
      />

      <ScoresInfoBox
        currentSoldier={currentSoldier}
        setCurrentSoldier={setCurrentSoldier}
        editSection={editSection}
        setEditSection={setEditSection}
        handleChangeEditSection={handleChangeEditSection}
        loggedInSoldier={loggedInSoldier}
      />

      <MilitaryEducationBox
        currentSoldier={currentSoldier}
        setCurrentSoldier={setCurrentSoldier}
        editSection={editSection}
        setEditSection={setEditSection}
        handleChangeEditSection={handleChangeEditSection}
        loggedInSoldier={loggedInSoldier}
      />
    </div>
  );
};

export default SoldierDetails;
