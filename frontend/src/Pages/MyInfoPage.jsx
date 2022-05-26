import SoldierDetails from "../Components/SoldierDetails";

const MyInfoPage = ({ loggedInSoldier, setLoggedInSoldier }) => {
  return (
    <div className="primary-content">
      <SoldierDetails
        currentSoldier={loggedInSoldier}
        setCurrentSoldier={setLoggedInSoldier}
      />
    </div>
  );
};

export default MyInfoPage;
