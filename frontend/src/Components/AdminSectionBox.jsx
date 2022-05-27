import { useEffect, useState } from "react";
import AdminBoxSoldierContainer from "./AdminBoxSoldierContainer";

const AdminSectionBox = ({
  section,
  allSoldiers,
  soldierToReassign,
  setSoldierToReassign,
  setAllSoldiers,
}) => {
  const [filteredSoldiers, setFilteredSoldiers] = useState();

  useEffect(() => {
    const filteredBySection = allSoldiers
      ? allSoldiers.filter((soldier) => {
          return soldier.section === section;
        })
      : null;
    setFilteredSoldiers(filteredBySection);
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
              />
            );
          })}
      </div>
    </div>
  );
};

export default AdminSectionBox;
