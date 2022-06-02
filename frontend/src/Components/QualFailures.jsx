import { useEffect, useState } from "react";

const QualFailures = ({ allSoldiers }) => {
  const [qualFailures, setQualFailures] = useState(null);

  useEffect(() => {
    const failures =
      allSoldiers &&
      allSoldiers.filter((soldier) => {
        return soldier.m4_qual < 23;
      });
    setQualFailures(failures);
  }, [allSoldiers]);

  return (
    <div className="separate-soon-box-container">
      <h3 className="separate-soon-title">M4 Qual Failures</h3>
      <div className="separate-soon-list-container">
        {qualFailures && qualFailures.length > 0 ? (
          qualFailures.map((soldier) => {
            return (
              <div key={soldier.id} className="separate-soon-soldier">
                {soldier.rank} {soldier.last_name} - {soldier.m4_qual}
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

export default QualFailures;
