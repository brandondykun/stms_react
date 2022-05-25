import { useState } from "react";
import apiCalls from "../apiCalls/apiCalls";

const SoldierDetails = ({ currentSoldier, setCurrentSoldier }) => {
  const [editSection, setEditSection] = useState(null);
  const [grade, setGrade] = useState(currentSoldier.grade);
  const [rank, setRank] = useState(currentSoldier.rank);
  const [pebd, setPebd] = useState(currentSoldier.pebd);
  const [dateOfRank, setDateOfRank] = useState(currentSoldier.date_of_rank);
  const [ets, setEts] = useState(currentSoldier.expiration_term_of_service);

  const etsDate = new Date(currentSoldier.expiration_term_of_service);
  const currentDate = new Date();
  const timeUntilEts = etsDate.getTime() - currentDate.getTime();
  const daysUntilEts = Math.ceil(timeUntilEts / (1000 * 3600 * 24));

  const handleChangeEditSection = (section) => {
    console.log(section);
    setEditSection(section);
  };

  const handleRankDatesFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      rank: rank,
      grade: grade,
      pebd: pebd,
      date_of_rank: dateOfRank,
      expiration_term_of_service: ets,
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

  return (
    <div>
      <h2>
        {currentSoldier.rank} {currentSoldier.first_name}{" "}
        {currentSoldier.middle_name} {currentSoldier.last_name}
      </h2>

      <div className="info-box-container">
        <div className="info-box-title with-edit-button">
          <div className="info-box-title-text">Assignment</div>
        </div>

        <div className="info-box-content-container">
          <div>Section: {currentSoldier.section}</div>
          <div>Team: {currentSoldier.team}</div>
          <div>Role: {currentSoldier.role}</div>
        </div>
      </div>

      <div className="info-box-container">
        <div className="info-box-title with-edit-button">
          <div className="info-box-title-text">Rank/Dates</div>
          {editSection !== "Rank/Dates" && (
            <button
              onClick={() => handleChangeEditSection("Rank/Dates")}
              className="title-box-button"
            >
              Edit
            </button>
          )}
          {editSection === "Rank/Dates" && (
            <button
              type="submit"
              form="rank-date-form"
              className="title-box-button"
            >
              Submit
            </button>
          )}
        </div>
        {editSection !== "Rank/Dates" ? (
          <div className="info-box-content-container">
            <div>Grade: {currentSoldier.grade}</div>
            <div>Rank: {currentSoldier.rank}</div>
            <div>PEBD: {currentSoldier.pebd}</div>
            <div>Date of Rank: {currentSoldier.date_of_rank}</div>
            <div>ETS: {currentSoldier.expiration_term_of_service}</div>
            <div>Days Until ETS: {daysUntilEts}</div>
          </div>
        ) : (
          <div className="info-box-content-container">
            <form id="rank-date-form" onSubmit={handleRankDatesFormSubmit}>
              <div className="edit-form-input-container">
                <label htmlFor="grade">Grade:</label>
                <select
                  name="grade"
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="E1">E1</option>
                  <option value="E2">E2</option>
                  <option value="E3">E3</option>
                  <option value="E4">E4</option>
                  <option value="E5">E5</option>
                  <option value="E6">E6</option>
                  <option value="E7">E7</option>
                  <option value="O1">O1</option>
                  <option value="O2">O2</option>
                  <option value="O3">O3</option>
                </select>
              </div>

              <div className="edit-form-input-container">
                <label htmlFor="rank">Rank:</label>
                <select
                  name="rank"
                  id="rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                >
                  <option value="PVT">PVT</option>
                  <option value="PV2">PV2</option>
                  <option value="PFC">PFC</option>
                  <option value="SPC">SPC</option>
                  <option value="SGT">SGT</option>
                  <option value="SSG">SSG</option>
                  <option value="SFC">SFC</option>
                  <option value="2LT">2LT</option>
                  <option value="1LT">1LT</option>
                  <option value="CPT">CPT</option>
                </select>
              </div>
              <div className="edit-form-input-container">
                <label htmlFor="pebd">PEBD:</label>
                <input
                  type="date"
                  id="pebd"
                  name="pebd"
                  value={pebd}
                  onChange={(e) => setPebd(e.target.value)}
                />
              </div>

              <div className="edit-form-input-container">
                <label htmlFor="date_of_rank">Date of Rank:</label>
                <input
                  type="date"
                  id="date_of_rank"
                  name="date_of_rank"
                  value={dateOfRank}
                  onChange={(e) => setDateOfRank(e.target.value)}
                />
              </div>

              <div className="edit-form-input-container">
                <label htmlFor="ets">ETS:</label>
                <input
                  type="date"
                  id="ets"
                  name="ets"
                  value={ets}
                  onChange={(e) => setEts(e.target.value)}
                />
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="info-box-container">
        <div className="info-box-title with-edit-button">
          <div className="info-box-title-text">Scores</div>
          <button
            onClick={() => handleChangeEditSection("Scores")}
            className="title-box-button"
          >
            Edit
          </button>
        </div>
        <div className="info-box-content-container">
          <div>ACFT: {currentSoldier.acft_score}</div>
          <div>M4 Qual: {currentSoldier.m4_qual}</div>
        </div>
      </div>

      <div className="info-box-container">
        <div className="info-box-title with-edit-button">
          <div className="info-box-title-text">Military Education</div>
          <button
            onClick={() => handleChangeEditSection("Military Education")}
            className="title-box-button"
          >
            Edit
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default SoldierDetails;
