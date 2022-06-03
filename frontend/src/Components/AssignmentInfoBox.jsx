const AssignmentInfoBox = ({ currentSoldier }) => {
  return (
    <div className="info-box-container">
      <div className="info-box-title with-edit-button">
        <div className="info-box-title-text">Assignment</div>
      </div>

      <div className="info-box-content-container">
        <div className="info-box-detail">Section: {currentSoldier.section}</div>
        <div className="info-box-detail">Team: {currentSoldier.team}</div>
        <div className="info-box-detail">Role: {currentSoldier.role}</div>
      </div>
    </div>
  );
};

export default AssignmentInfoBox;
