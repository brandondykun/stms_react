import apiCalls from "../apiCalls/apiCalls";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import SectionBox from "../Components/SectionBox";

const HomePage = ({ loggedInSoldier }) => {
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
      <h1 className="page-title">Homepage</h1>
      {loggedInSoldier.section === "UNASSIGNED" && (
        <div className="under-title-messsage">
          You have not been assgined to a section yet. Once you are assigned to
          a section, you will show up in your section box.
        </div>
      )}
      <SectionBox soldiers={allSoldiers} section="BN STAFF" />
      <div className="responsive-flex-row">
        <SectionBox soldiers={allSoldiers} section="ALPHA" />
        <SectionBox soldiers={allSoldiers} section="BRAVO" />
        <SectionBox soldiers={allSoldiers} section="CHARLIE" />
      </div>
      {/* <SectionBox soldiers={allSoldiers} section="UNASSIGNED" /> */}
    </div>
  );
};

export default HomePage;
