import { useEffect, useState } from "react";
import AdminBoxSoldierContainer from "./AdminBoxSoldierContainer";

const AdminSectionBox = ({
  section,
  allSoldiers,
  soldierToReassign,
  setSoldierToReassign,
  setAllSoldiers,
  loggedInSoldier,
  setLoggedInSoldier,
}) => {
  const [filteredSoldiers, setFilteredSoldiers] = useState();

  useEffect(() => {
    const filteredBySection = allSoldiers
      ? allSoldiers.filter((soldier) => {
          return soldier.section === section;
        })
      : null;
    if (filteredBySection) {
      const sorted = filteredBySection.sort((a, b) =>
        a.unit_position > b.unit_position ? 1 : -1
      );
      setFilteredSoldiers(sorted);
    }
  }, [allSoldiers]);

  return (
    <div className="info-box-container">
      <div className="info-box-title">{section}</div>
      <div className="info-box-content-container">
        {filteredSoldiers &&
          filteredSoldiers.map((soldier) => {
            return (
              <AdminBoxSoldierContainer
                soldier={soldier}
                soldierToReassign={soldierToReassign}
                setSoldierToReassign={setSoldierToReassign}
                allSoldiers={allSoldiers}
                setAllSoldiers={setAllSoldiers}
                loggedInSoldier={loggedInSoldier}
                setLoggedInSoldier={setLoggedInSoldier}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AdminSectionBox;
