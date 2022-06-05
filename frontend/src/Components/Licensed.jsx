import { useEffect, useState } from "react";

const Licensed = ({ allSoldiers }) => {
  const [filteredSoldiers, setFilteredSoldiers] = useState(null);

  useEffect(() => {
    const filtered =
      allSoldiers &&
      allSoldiers.filter((soldier) => {
        return soldier.drivers_license;
      });
    setFilteredSoldiers(filtered);
  }, [allSoldiers]);

  return (
    <div className="separate-soon-box-container">
      <h3 className="separate-soon-title">Licensed</h3>
      <div className="separate-soon-list-container">
        {filteredSoldiers && filteredSoldiers.length > 0 ? (
          filteredSoldiers.map((soldier) => {
            return (
              <div key={soldier.id} className="separate-soon-soldier">
                {soldier.rank} {soldier.last_name}
              </div>
            );
          })
        ) : (
          <div>None</div>
        )}
      </div>
    </div>
  );
};

export default Licensed;
