import { useState, useEffect } from "react";
import apiCalls from "../apiCalls/apiCalls";

const ScoresInfoBox = ({
  currentSoldier,
  handleChangeEditSection,
  editSection,
  setEditSection,
  setCurrentSoldier,
  loggedInSoldier,
}) => {
  const [acftScore, setAcftScore] = useState(currentSoldier.acft_score);
  const [m4Qual, setM4Qual] = useState(currentSoldier.m4_qual);
  const [loggedInSoldierCanEdit, setLoggedInSoldierCanEdit] = useState(false);

  const handleScoresFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      acft_score: acftScore,
      m4_qual: m4Qual,
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
        <div className="info-box-title-text">Scores</div>
        {loggedInSoldierCanEdit && editSection !== "Scores" && (
          <button
            onClick={() => handleChangeEditSection("Scores")}
            className="title-box-button"
          >
            Edit
          </button>
        )}
        {editSection === "Scores" && (
          <button type="submit" form="scores-form" className="title-box-button">
            Submit
          </button>
        )}
      </div>

      {editSection !== "Scores" ? (
        <div className="info-box-content-container">
          <div>ACFT: {currentSoldier.acft_score}</div>
          <div>M4 Qual: {currentSoldier.m4_qual}</div>
        </div>
      ) : (
        <div className="info-box-content-container">
          <form id="scores-form" onSubmit={handleScoresFormSubmit}>
            <div className="edit-form-input-container">
              <label htmlFor="acft-score">ACFT:</label>
              <input
                type="number"
                id="acft-score"
                name="acft-score"
                min="0"
                max="600"
                value={acftScore}
                onChange={(e) => setAcftScore(e.target.value)}
              />
            </div>
            <div className="edit-form-input-container">
              <label htmlFor="m4-qual">M4 Qual Score:</label>
              <input
                type="number"
                id="m4-qual"
                name="m4-qual"
                min="0"
                max="40"
                value={m4Qual}
                onChange={(e) => setM4Qual(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ScoresInfoBox;
