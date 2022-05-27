const AssignmentInfoBox = ({ currentSoldier }) => {
  return (
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
  );
};

export default AssignmentInfoBox;
