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
    <div className="info-box-container homepage-info-box">
      <div className="info-box-title">{section}</div>
      <div className="info-box-content-container">
        {filteredSoldiers &&
          filteredSoldiers.map((soldier) => {
            return (
              <div
                key={soldier.id}
                className="soldier-role-name-container-homepage"
              >
                <Link
                  to={`/soldier-info/${soldier.id}`}
                  style={{ display: "inline-block" }}
                  className="name-link"
                >
                  {soldier.role} {soldier.rank} {soldier.last_name}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SectionBox;
