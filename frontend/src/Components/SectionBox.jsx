import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SectionBox = ({ section, soldiers }) => {
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
    <div className="section-container">
      <div className="section-title">{section}</div>
      {filteredSoldiers &&
        filteredSoldiers.map((soldier) => {
          return (
            <div key={soldier.id} className="soldier-role-name-container">
              <div>{soldier.role}</div>
              <Link
                to={`/soldier-info/${soldier.id}`}
                style={{ display: "inline-block" }}
                className="name-link"
              >
                {soldier.rank} {soldier.last_name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SectionBox;
