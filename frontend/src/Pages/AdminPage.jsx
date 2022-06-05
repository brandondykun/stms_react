import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";
import AdminSectionBox from "../Components/AdminSectionBox";
import SeparateSoon from "../Components/SeparateSoon";
import QualFailures from "../Components/QualFailures";
import JfoQualified from "../Components/JfoQualified";
import Licensed from "../Components/Licensed";

const AdminPage = ({ loggedInSoldier, setLoggedInSoldier }) => {
  const [allSoldiers, setAllSoldiers] = useState();
  const [soldierToReassign, setSoldierToReassign] = useState(null);

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
      <h1 className="page-title">Admin Page</h1>
      <div className="admin-page-container">
        <div className="admin-section-boxes-container">
          <AdminSectionBox
            section="BN STAFF"
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            soldierToReassign={soldierToReassign}
            setSoldierToReassign={setSoldierToReassign}
            loggedInSoldier={loggedInSoldier}
            setLoggedInSoldier={setLoggedInSoldier}
          />
          <AdminSectionBox
            section="ALPHA"
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            soldierToReassign={soldierToReassign}
            setSoldierToReassign={setSoldierToReassign}
            loggedInSoldier={loggedInSoldier}
            setLoggedInSoldier={setLoggedInSoldier}
          />
          <AdminSectionBox
            section="BRAVO"
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            soldierToReassign={soldierToReassign}
            setSoldierToReassign={setSoldierToReassign}
            loggedInSoldier={loggedInSoldier}
            setLoggedInSoldier={setLoggedInSoldier}
          />
          <AdminSectionBox
            section="CHARLIE"
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            soldierToReassign={soldierToReassign}
            setSoldierToReassign={setSoldierToReassign}
            loggedInSoldier={loggedInSoldier}
            setLoggedInSoldier={setLoggedInSoldier}
          />
          <AdminSectionBox
            section="UNASSIGNED"
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            soldierToReassign={soldierToReassign}
            setSoldierToReassign={setSoldierToReassign}
            loggedInSoldier={loggedInSoldier}
            setLoggedInSoldier={setLoggedInSoldier}
          />
        </div>
        <div>
          <div className="separate-soon-container">
            <h2>Upcomming ETS</h2>
            <SeparateSoon
              allSoldiers={allSoldiers}
              daysStart={0}
              daysStop={30}
            />
            <SeparateSoon
              allSoldiers={allSoldiers}
              daysStart={30}
              daysStop={60}
            />
            <SeparateSoon
              allSoldiers={allSoldiers}
              daysStart={60}
              daysStop={90}
            />
            <SeparateSoon
              allSoldiers={allSoldiers}
              daysStart={90}
              daysStop={180}
            />
            <SeparateSoon
              allSoldiers={allSoldiers}
              daysStart={180}
              daysStop={365}
            />
          </div>
          <div className="separate-soon-container">
            <h2>Failures</h2>
            <QualFailures allSoldiers={allSoldiers} />
          </div>
          <div className="separate-soon-container">
            <h2>Qualifications</h2>
            <JfoQualified allSoldiers={allSoldiers} />
            <Licensed allSoldiers={allSoldiers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
