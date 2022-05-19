import apiCalls from "../apiCalls/apiCalls";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [allSoldiers, setAllSoldiers] = useState();

  useEffect(() => {
    apiCalls
      .getAllSoldiers()
      .then((res) => {
        if (res.status === 200) {
          setAllSoldiers(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="primary-content">
      <h1>Homepage</h1>
      {allSoldiers &&
        allSoldiers.map((soldier) => {
          return (
            <Link
              to={`/soldier-info/${soldier.id}`}
              style={{ display: "block" }}
            >
              {soldier.rank} {soldier.last_name}
            </Link>
          );
        })}
    </div>
  );
};

export default HomePage;
