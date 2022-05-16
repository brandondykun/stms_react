const CreateAccountForm = () => {
  return (
    <div className="main-content">
      <form action="">
        <label htmlFor="first_name">First Name:</label>
        <input type="text" placeholder="First Name" name="first_name" />

        <label htmlFor="middle_name">Middle Name:</label>
        <input type="text" placeholder="Middle Name" name="middle_name" />

        <label htmlFor="last_name">Last Name:</label>
        <input type="text" placeholder="Last Name" name="last_name" />

        <label htmlFor="rank">Rank:</label>
        <select name="rank" id="rank">
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
        <select name="grade" id="grade">
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
        <input type="date" id="pebd" name="pebd" />

        <label htmlFor="date_of_rank">PEBD:</label>
        <input type="date" id="date_of_rank" name="date_of_rank" />

        <label htmlFor="ets">ETS:</label>
        <input type="date" id="ets" name="ets" />

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
        />

        <label htmlFor="m4_qual">M4 Qual:</label>
        <input type="number" id="m4_qual" name="m4_qual" min="0" max="600" />

        <input type="checkbox" id="dlc_1_complete" name="dlc_1_complete" />
        <label htmlFor="dlc_1_complete">DLC 1 Complete</label>

        <input type="checkbox" id="blc_complete" name="blc_complete" />
        <label htmlFor="blc_complete">BLC Complete</label>

        <input type="checkbox" id="dlc_2_complete" name="dlc_2_complete" />
        <label htmlFor="dlc_2_complete">DLC 2 Complete</label>

        <input type="checkbox" id="alc_complete" name="alc_complete"></input>
        <label htmlFor="alc_complete">ALC Complete</label>

        <input type="checkbox" id="dlc_3_complete" name="dlc_3_complete" />
        <label htmlFor="dlc_3_complete">DLC 3 Complete</label>

        <input type="checkbox" id="slc_complete" name="slc_complete" />
        <label htmlFor="slc_complete">SLC Complete</label>

        <input type="checkbox" id="jfo_qualified" name="jfo_qualified" />
        <label htmlFor="jfo_qualified">JFO Qualified</label>

        <input type="checkbox" id="drivers_license" name="drivers_license" />
        <label htmlFor="drivers_license">Military Drivers Liscense</label>
      </form>
    </div>
  );
};

// "id": 3,
// "user": 1,
// "first_name": "Brandon",
// "middle_name": "William",
// "last_name": "Dykun",
// "rank": "SSG",
// "grade": "E6",
// "pebd": "2006-05-21",
// "date_of_rank": "2021-01-15",
// "expiration_term_of_service": "2023-09-22",
// "section": "BN STAFF",
// "team": "HQ",
// "role": "BN FSNCO",
// "acft_score": 531,
// "m4_qual": 39,
// "dlc_1_complete": true,
// "blc_complete": true,
// "dlc_2_complete": true,
// "alc_complete": true,
// "dlc_3_complete": true,
// "slc_complete": false,
// "jfo_qualified": true,
// "drivers_license": true

export default CreateAccountForm;
