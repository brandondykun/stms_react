import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";
import AdminSectionBox from "../Components/AdminSectionBox";

const AdminPage = () => {
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
      <h2>Admin Page</h2>
      <AdminSectionBox
        section="BN STAFF"
        allSoldiers={allSoldiers}
        setAllSoldiers={setAllSoldiers}
        soldierToReassign={soldierToReassign}
        setSoldierToReassign={setSoldierToReassign}
      />
      <AdminSectionBox
        section="ALPHA"
        allSoldiers={allSoldiers}
        setAllSoldiers={setAllSoldiers}
        soldierToReassign={soldierToReassign}
        setSoldierToReassign={setSoldierToReassign}
      />
      <AdminSectionBox
        section="BRAVO"
        allSoldiers={allSoldiers}
        setAllSoldiers={setAllSoldiers}
        soldierToReassign={soldierToReassign}
        setSoldierToReassign={setSoldierToReassign}
      />
      <AdminSectionBox
        section="CHARLIE"
        allSoldiers={allSoldiers}
        setAllSoldiers={setAllSoldiers}
        soldierToReassign={soldierToReassign}
        setSoldierToReassign={setSoldierToReassign}
      />
      <AdminSectionBox
        section="UNASSIGNED"
        allSoldiers={allSoldiers}
        setAllSoldiers={setAllSoldiers}
        soldierToReassign={soldierToReassign}
        setSoldierToReassign={setSoldierToReassign}
      />
    </div>
  );
};

export default AdminPage;
