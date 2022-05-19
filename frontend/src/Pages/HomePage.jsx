import apiCalls from "../apiCalls/apiCalls";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import SectionBox from "../Components/SectionBox";

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
      <SectionBox soldiers={allSoldiers} section="BN STAFF" />
      <SectionBox soldiers={allSoldiers} section="ALPHA" />
      <SectionBox soldiers={allSoldiers} section="BRAVO" />
      <SectionBox soldiers={allSoldiers} section="CHARLIE" />
      <SectionBox soldiers={allSoldiers} section="UNASSIGNED" />
    </div>
  );
};

export default HomePage;
