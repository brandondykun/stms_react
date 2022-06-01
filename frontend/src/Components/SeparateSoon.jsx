import { useEffect, useState } from "react";

const SeparateSoon = ({ allSoldiers, daysStart, daysStop }) => {
  const [soldiers, setSoldiers] = useState(null);

  useEffect(() => {
    const timeUntilSeparation = (soldier, daysStart, daysStop) => {
      const etsDate = new Date(soldier.expiration_term_of_service);
      const currentDate = new Date();
      const timeUntilEts = etsDate.getTime() - currentDate.getTime();
      const daysUntilEts = Math.ceil(timeUntilEts / (1000 * 3600 * 24));
      return daysUntilEts >= daysStart && daysUntilEts < daysStop;
    };

    const filteredSoldiers =
      allSoldiers &&
      allSoldiers.filter((soldier) => {
        return timeUntilSeparation(soldier, daysStart, daysStop);
      });

    const sortedSoldiers =
      filteredSoldiers &&
      filteredSoldiers.sort((a, b) =>
        a.expiration_term_of_service > b.expiration_term_of_service ? 1 : -1
      );

    setSoldiers(sortedSoldiers);
  }, [allSoldiers]);

  return (
    <div className="separate-soon-box-container">
      <h3 className="separate-soon-title">ETS in less than {daysStop} days</h3>
      <div className="separate-soon-list-container">
        {soldiers && soldiers.length > 0 ? (
          soldiers.map((soldier) => {
            const date = new Date(
              soldier.expiration_term_of_service
            ).toLocaleDateString();
            return (
              <div key={soldier.id} className="separate-soon-soldier">
                {soldier.rank} {soldier.last_name} - ETS: {date}
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

export default SeparateSoon;
