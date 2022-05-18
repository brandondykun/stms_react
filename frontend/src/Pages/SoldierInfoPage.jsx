import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SoldierInfoPage = () => {
  const { id } = useParams();

  return (
    <div className="main-content">
      <div>Soldier {id} info page</div>
      <Link to={`/soldier-info/${id}/comments`}>View Comments</Link>
    </div>
  );
};

export default SoldierInfoPage;
