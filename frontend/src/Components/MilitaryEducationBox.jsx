import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";

const MilitaryEducationBox = ({
  currentSoldier,
  handleChangeEditSection,
  editSection,
  setEditSection,
  setCurrentSoldier,
  loggedInSoldier,
}) => {
  const [dlc1Complete, setDlc1Complete] = useState(
    currentSoldier.dlc_1_complete
  );
  const [blcComplete, setBlcComplete] = useState(currentSoldier.blc_complete);
  const [dlc2Complete, setDlc2Complete] = useState(
    currentSoldier.dlc_2_complete
  );
  const [alcComplete, setAlcComplete] = useState(currentSoldier.alc_complete);
  const [dlc3Complete, setDlc3Complete] = useState(
    currentSoldier.dlc_3_complete
  );
  const [slcComplete, setSlcComplete] = useState(currentSoldier.slc_complete);
  const [jfoQualified, setJfoQualified] = useState(
    currentSoldier.jfo_qualified
  );
  const [driversLicense, setDriversLicense] = useState(
    currentSoldier.drivers_license
  );
  const [loggedInSoldierCanEdit, setLoggedInSoldierCanEdit] = useState(false);

  const handleEducationFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      dlc_1_complete: dlc1Complete,
      blc_complete: blcComplete,
      dlc_2_complete: dlc2Complete,
      alc_complete: alcComplete,
      dlc_3_complete: dlc3Complete,
      slc_complete: slcComplete,
      jfo_qualified: jfoQualified,
      drivers_license: driversLicense,
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
    if (loggedInSoldier.id === currentSoldier.id || loggedInSoldier.is_leader) {
      setLoggedInSoldierCanEdit(true);
    }
  }, [currentSoldier]);

  return (
    <div className="info-box-container">
      <div className="info-box-title with-edit-button">
        <div className="info-box-title-text">Military Education</div>
        {loggedInSoldierCanEdit && editSection !== "Military Education" && (
          <button
            onClick={() => handleChangeEditSection("Military Education")}
            className="title-box-button"
          >
            Edit
          </button>
        )}
        {editSection === "Military Education" && (
          <button
            type="submit"
            form="education-form"
            className="title-box-button"
          >
            Submit
          </button>
        )}
      </div>
      {editSection !== "Military Education" ? (
        <div className="info-box-content-container">
          <div>
            DLC 1 Complete: {currentSoldier.dlc_1_complete ? "True" : "False"}
          </div>
          <div>
            BLC Complete: {currentSoldier.blc_complete ? "True" : "False"}
          </div>
          <div>
            DLC 2 Complete: {currentSoldier.dlc_2_complete ? "True" : "False"}
          </div>
          <div>
            ALC Complete: {currentSoldier.alc_complete ? "True" : "False"}
          </div>
          <div>
            DLC 3 Complete: {currentSoldier.dlc_3_complete ? "True" : "False"}
          </div>
          <div>
            SLC Complete: {currentSoldier.slc_complete ? "True" : "False"}
          </div>
          <div>
            JFO Qualified: {currentSoldier.jfo_qualified ? "True" : "False"}
          </div>
          <div>
            Drivers License: {currentSoldier.drivers_license ? "True" : "False"}
          </div>
        </div>
      ) : (
        <div className="info-box-content-container">
          <form id="education-form" onSubmit={handleEducationFormSubmit}>
            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="dlc_1_complete"
                name="dlc_1_complete"
                checked={dlc1Complete}
                onChange={(e) => setDlc1Complete(!dlc1Complete)}
              />
              <label htmlFor="dlc_1_complete">DLC 1 Complete</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="blc_complete"
                name="blc_complete"
                checked={blcComplete}
                onChange={(e) => setBlcComplete(!blcComplete)}
              />
              <label htmlFor="blc_complete">BLC Complete</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="dlc_2_complete"
                name="dlc_2_complete"
                checked={dlc2Complete}
                onChange={(e) => setDlc2Complete(!dlc2Complete)}
              />
              <label htmlFor="dlc_2_complete">DLC 2 Complete</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="alc_complete"
                name="alc_complete"
                checked={alcComplete}
                onChange={(e) => setAlcComplete(!alcComplete)}
              />
              <label htmlFor="alc_complete">ALC Complete</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="dlc_3_complete"
                name="dlc_3_complete"
                checked={dlc3Complete}
                onChange={(e) => setDlc3Complete(!dlc3Complete)}
              />
              <label htmlFor="dlc_3_complete">DLC 3 Complete</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="slc_complete"
                name="slc_complete"
                checked={slcComplete}
                onChange={(e) => setSlcComplete(!slcComplete)}
              />
              <label htmlFor="slc_complete">SLC Complete</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="jfo_qualified"
                name="jfo_qualified"
                checked={jfoQualified}
                onChange={(e) => setJfoQualified(!jfoQualified)}
              />
              <label htmlFor="jfo_qualified">JFO Qualified</label>
            </div>

            <div className="edit-form-input-container">
              <input
                type="checkbox"
                id="drivers_license"
                name="drivers_license"
                checked={driversLicense}
                onChange={(e) => setDriversLicense(!driversLicense)}
              />
              <label htmlFor="drivers_license">Military Drivers License</label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MilitaryEducationBox;
