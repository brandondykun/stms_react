import { Link } from "react-router-dom";
import { useState } from "react";
import apiCalls from "../apiCalls/apiCalls";

const AdminBoxSoldierContainer = ({
  soldier,
  soldierToReassign,
  setSoldierToReassign,
  allSoldiers,
  setAllSoldiers,
  loggedInSoldier,
  setLoggedInSoldier,
}) => {
  const [role, setRole] = useState(soldier.role);
  const [section, setSection] = useState(soldier.section);
  const [team, setTeam] = useState(soldier.team);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      role: role,
      section: section,
      team: team,
    };

    apiCalls
      .updateSoldierInfo(soldier.id, data)
      .then((res) => {
        if (res.status === 200) {
          const soldiers = allSoldiers.filter((s) => {
            return s.id != soldier.id;
          });
          setAllSoldiers([...soldiers, res.data]);
          if (soldier.id === loggedInSoldier.id) {
            setLoggedInSoldier(res.data);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setSoldierToReassign(null);
  };

  const notEditingSoldier = () => {
    if (soldierToReassign) {
      return soldierToReassign.id !== soldier.id;
    }
    return false;
  };

  return (
    <div key={soldier.id} className="soldier-role-name-container">
      <div className="soldier-name-button-container">
        <div>
          {soldier.rank} {soldier.last_name}
        </div>
        {soldierToReassign === null && notEditingSoldier && (
          <button
            className="reassign-button"
            onClick={() => setSoldierToReassign(soldier)}
          >
            Reassign
          </button>
        )}
        {soldierToReassign && soldierToReassign.id === soldier.id && (
          <button
            className="reassign-button"
            type="submit"
            form="reassign-form"
          >
            Submit
          </button>
        )}
      </div>
      {!soldierToReassign || soldierToReassign.id !== soldier.id ? (
        <div className="info-box-content">
          <div className="admin-info-indented">Role: {soldier.role}</div>
          <div className="admin-info-indented">Section: {soldier.section}</div>
          <div className="admin-info-indented">Team: {soldier.team}</div>
        </div>
      ) : (
        <form id="reassign-form" onSubmit={handleFormSubmit}>
          <div className="edit-form-input-container">
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="BN FSO">BN FSO</option>
              <option value="BN FSNCO">BN FSNCO</option>
              <option value="AFATDS">AFATDS</option>
              <option value="BN FO">BN FO</option>
              <option value="BN RTO">BN RTO</option>
              <option value="CO FSO">CO FSO</option>
              <option value="CO FSNCO">CO FSNCO</option>
              <option value="FO">FO</option>
              <option value="RTO">RTO</option>
              <option value="UNASSIGNED">UNASSIGNED</option>
            </select>
          </div>

          <div className="edit-form-input-container">
            <label htmlFor="section">Section:</label>
            <select
              name="section"
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="BN STAFF">BN STAFF</option>
              <option value="ALPHA">ALPHA</option>
              <option value="BRAVO">BRAVO</option>
              <option value="CHARLIE">CHARLIE</option>
              <option value="DELTA">DELTA</option>
              <option value="UNASSIGNED">UNASSIGNED</option>
            </select>
          </div>

          <div className="edit-form-input-container">
            <label htmlFor="team">Team:</label>
            <select
              name="team"
              id="team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            >
              <option value="HQ">HQ</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="UNASSIGNED">UNASSIGNED</option>
            </select>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminBoxSoldierContainer;
