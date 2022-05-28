import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";
import AdminSectionBox from "../Components/AdminSectionBox";

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
  );
};

export default AdminPage;
