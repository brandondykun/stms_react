import { useState } from "react";
import apiCalls from "../apiCalls/apiCalls";
import RankAndDatesInfoBox from "./RankAndDatesInfoBox";
import ScoresInfoBox from "./ScoresInfoBox";
import MilitaryEducationBox from "./MilitaryEducationBox";
import AssignmentInfoBox from "./AssignmentInfoBox";
import NameInfoBox from "./NameInfoBox";

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
      <NameInfoBox
        currentSoldier={currentSoldier}
        setCurrentSoldier={setCurrentSoldier}
        editSection={editSection}
        setEditSection={setEditSection}
        handleChangeEditSection={handleChangeEditSection}
        loggedInSoldier={loggedInSoldier}
      />

      <AssignmentInfoBox currentSoldier={currentSoldier} />

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
