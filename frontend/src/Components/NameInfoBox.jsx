import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";

const NameInfoBox = ({
  currentSoldier,
  handleChangeEditSection,
  editSection,
  setEditSection,
  setCurrentSoldier,
  loggedInSoldier,
}) => {
  const [firstName, setFirstName] = useState(currentSoldier.first_name);
  const [middleName, setMiddleName] = useState(currentSoldier.middle_name);
  const [lastName, setLastName] = useState(currentSoldier.last_name);
  const [loggedInSoldierCanEdit, setLoggedInSoldierCanEdit] = useState(false);

  const handleNameFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
    };

    apiCalls
      .updateSoldierInfo(currentSoldier.id, data)
      .then((res) => {
        if (res.status === 200) {
          setCurrentSoldier(res.data);
          setEditSection(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (loggedInSoldier.id === currentSoldier.id || loggedInSoldier.is_staff) {
      setLoggedInSoldierCanEdit(true);
    }
  }, [currentSoldier]);

  return (
    <div className="info-box-container">
      <div className="info-box-title with-edit-button">
        <div className="info-box-title-text">Name</div>
        {loggedInSoldierCanEdit && editSection !== "Name" && (
          <button
            onClick={() => handleChangeEditSection("Name")}
            className="title-box-button"
          >
            Edit
          </button>
        )}
        {editSection === "Name" && (
          <button type="submit" form="name-form" className="title-box-button">
            Submit
          </button>
        )}
      </div>

      {editSection !== "Name" ? (
        <div className="info-box-content-container">
          <div>First Name: {currentSoldier.first_name}</div>
          <div>Middle Name: {currentSoldier.middle_name}</div>
          <div>Last Name: {currentSoldier.last_name}</div>
        </div>
      ) : (
        <div className="info-box-content-container">
          <form id="name-form" onSubmit={handleNameFormSubmit}>
            <div className="edit-form-input-container">
              <label htmlFor="first-name">First Name:</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="edit-form-input-container">
              <label htmlFor="middle-name">Middle Name:</label>
              <input
                type="text"
                id="middle-name"
                name="middle-name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="edit-form-input-container">
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NameInfoBox;
