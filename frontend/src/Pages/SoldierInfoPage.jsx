import { useParams } from "react-router-dom";
const SoldierInfo = () => {
  const { id } = useParams();

  return (
    <div className="main-content">
      <div>Soldier {id} info page</div>
    </div>
  );
};

export default SoldierInfo;
