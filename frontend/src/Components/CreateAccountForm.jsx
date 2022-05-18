import apiCalls from "../apiCalls/apiCalls";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateAccountForm = () => {
  //   const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rank, setRank] = useState("PVT");
  const [grade, setGrade] = useState("E1");
  const [pebd, setPebd] = useState("");
  const [dateOfRank, setDateOfRank] = useState("");
  const [ets, setEts] = useState("");
  const [acftScore, setAcftScore] = useState(0);
  const [m4Qual, setM4Qual] = useState(0);
  const [dlc1Complete, setDlc1Complete] = useState(false);
  const [blcComplete, setBlcComplete] = useState(false);
  const [dlc2Complete, setDlc2Complete] = useState(false);
  const [alcComplete, setAlcComplete] = useState(false);
  const [dlc3Complete, setDlc3Complete] = useState(false);
  const [slcComplete, setSlcComplete] = useState(false);
  const [jfoQualified, setJfoQualified] = useState(false);
  const [driversLicense, setDriversLicense] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleCreateAccountFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      user: id,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      rank: rank,
      grade: grade,
      pebd: pebd,
      date_of_rank: dateOfRank,
      expiration_term_of_service: ets,
      section: null,
      team: null,
      role: null,
      acft_score: acftScore,
      m4_qual: m4Qual,
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
      .createAccount(data)
      .then((res) => {
        if (res.status === 201) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-content">
      <form onSubmit={handleCreateAccountFormSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="middle_name">Middle Name:</label>
        <input
          type="text"
          placeholder="Middle Name"
          name="middle_name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />

        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

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
          <option value="SPC">SGT</option>
          <option value="SPC">SSG</option>
          <option value="SPC">SFC</option>
          <option value="2LT">2LT</option>
          <option value="1LT">1LT</option>
          <option value="CPT">CPT</option>
        </select>

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

        <label htmlFor="pebd">PEBD:</label>
        <input
          type="date"
          id="pebd"
          name="pebd"
          value={pebd}
          onChange={(e) => setPebd(e.target.value)}
        />

        <label htmlFor="date_of_rank">Date of Rank:</label>
        <input
          type="date"
          id="date_of_rank"
          name="date_of_rank"
          value={dateOfRank}
          onChange={(e) => setDateOfRank(e.target.value)}
        />

        <label htmlFor="ets">ETS:</label>
        <input
          type="date"
          id="ets"
          name="ets"
          value={ets}
          onChange={(e) => setEts(e.target.value)}
        />

        {/* <label for="section">Section:</label>
        <select name="section" id="section">
          <option value="BN STAFF">BN STAFF</option>
          <option value="ALPHA">ALPHA</option>
          <option value="BRAVO">BRAVO</option>
          <option value="CHARLIE">CHARLIE</option>
          <option value="DELTA">DELTA</option>
          <option value="UNASSIGNED">UNASSIGNED</option>
        </select> */}
        {/* <label for="team">Team:</label>
        <select name="team" id="team">
          <option value="HQ">HQ</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="UNASSIGNED">UNASSIGNED</option>
        </select> */}
        {/* <label for="role">Role:</label>
        <select name="role" id="role">
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
        </select> */}
        <label htmlFor="acft_score">ACFT:</label>
        <input
          type="number"
          id="acft_score"
          name="acft_score"
          min="0"
          max="600"
          value={acftScore}
          onChange={(e) => setAcftScore(e.target.value)}
        />

        <label htmlFor="m4_qual">M4 Qual:</label>
        <input
          type="number"
          id="m4_qual"
          name="m4_qual"
          min="0"
          max="600"
          value={m4Qual}
          onChange={(e) => setM4Qual(e.target.value)}
        />

        <input
          type="checkbox"
          id="dlc_1_complete"
          name="dlc_1_complete"
          value={dlc1Complete}
          onChange={(e) => setDlc1Complete(e.target.value)}
        />
        <label htmlFor="dlc_1_complete">DLC 1 Complete</label>

        <input
          type="checkbox"
          id="blc_complete"
          name="blc_complete"
          value={blcComplete}
          onChange={(e) => setBlcComplete(e.target.value)}
        />
        <label htmlFor="blc_complete">BLC Complete</label>

        <input
          type="checkbox"
          id="dlc_2_complete"
          name="dlc_2_complete"
          value={dlc2Complete}
          onChange={(e) => setDlc2Complete(e.target.value)}
        />
        <label htmlFor="dlc_2_complete">DLC 2 Complete</label>

        <input
          type="checkbox"
          id="alc_complete"
          name="alc_complete"
          value={alcComplete}
          onChange={(e) => setAlcComplete(e.target.value)}
        />
        <label htmlFor="alc_complete">ALC Complete</label>

        <input
          type="checkbox"
          id="dlc_3_complete"
          name="dlc_3_complete"
          value={dlc3Complete}
          onChange={(e) => setDlc3Complete(e.target.value)}
        />
        <label htmlFor="dlc_3_complete">DLC 3 Complete</label>

        <input
          type="checkbox"
          id="slc_complete"
          name="slc_complete"
          value={slcComplete}
          onChange={(e) => setSlcComplete(e.target.value)}
        />
        <label htmlFor="slc_complete">SLC Complete</label>

        <input
          type="checkbox"
          id="jfo_qualified"
          name="jfo_qualified"
          value={jfoQualified}
          onChange={(e) => setJfoQualified(e.target.value)}
        />
        <label htmlFor="jfo_qualified">JFO Qualified</label>

        <input
          type="checkbox"
          id="drivers_license"
          name="drivers_license"
          value={driversLicense}
          onChange={(e) => setDriversLicense(e.target.value)}
        />
        <label htmlFor="drivers_license">Military Drivers Liscense</label>
      </form>
    </div>
  );
};

export default CreateAccountForm;
