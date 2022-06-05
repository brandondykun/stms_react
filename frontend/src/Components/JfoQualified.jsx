import { useEffect, useState } from "react";

const JfoQualified = ({ allSoldiers }) => {
  const [jfoQualified, setJfoQualified] = useState(null);

  useEffect(() => {
    const failures =
      allSoldiers &&
      allSoldiers.filter((soldier) => {
        return soldier.jfo_qualified;
      });
    setJfoQualified(failures);
  }, [allSoldiers]);

  return (
    <div className="separate-soon-box-container">
      <h3 className="separate-soon-title">JFO Qualified</h3>
      <div className="separate-soon-list-container">
        {jfoQualified && jfoQualified.length > 0 ? (
          jfoQualified.map((soldier) => {
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

export default JfoQualified;
