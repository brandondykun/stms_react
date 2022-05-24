import SoldierDetails from "../Components/SoldierDetails";

const MyInfoPage = ({ user, setUser }) => {
  return (
    <div className="primary-content">
      <SoldierDetails currentSoldier={user} />
    </div>
  );
};

export default MyInfoPage;
