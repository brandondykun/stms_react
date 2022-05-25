import SoldierDetails from "../Components/SoldierDetails";

const MyInfoPage = ({ user, setUser }) => {
  return (
    <div className="primary-content">
      <SoldierDetails currentSoldier={user} setCurrentSoldier={setUser} />
    </div>
  );
};

export default MyInfoPage;
