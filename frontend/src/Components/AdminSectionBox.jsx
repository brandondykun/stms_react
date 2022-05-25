import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminSectionBox = ({ section, soldiers }) => {
  const [filteredSoldiers, setFilteredSoldiers] = useState();

  useEffect(() => {
    const filteredBySection = soldiers
      ? soldiers.filter((soldier) => {
          return soldier.section === section;
        })
      : null;
    setFilteredSoldiers(filteredBySection);
  }, [soldiers]);
  return (
    <div className="info-box-container">
      <div className="info-box-title">{section}</div>
      <div className="info-box-content-container">
        {filteredSoldiers &&
          filteredSoldiers.map((soldier) => {
            return (
              <div key={soldier.id} className="soldier-role-name-container">
                <div>
                  {soldier.rank} {soldier.last_name}
                </div>
                <div>{soldier.role}</div>
                <div>{soldier.section}</div>
                <div>{soldier.team}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdminSectionBox;
