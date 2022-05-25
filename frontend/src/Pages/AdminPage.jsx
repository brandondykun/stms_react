import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";
import AdminSectionBox from "../Components/AdminSectionBox";

const AdminPage = () => {
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
      <div>This is the Admin Page</div>
      <AdminSectionBox section="BN STAFF" soldiers={allSoldiers} />
      <AdminSectionBox section="ALPHA" soldiers={allSoldiers} />
      <AdminSectionBox section="BRAVO" soldiers={allSoldiers} />
      <AdminSectionBox section="CHARLIE" soldiers={allSoldiers} />
      <AdminSectionBox section="UNASSIGNED" soldiers={allSoldiers} />
    </div>
  );
};

export default AdminPage;
