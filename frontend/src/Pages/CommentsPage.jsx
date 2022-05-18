import { useParams } from "react-router-dom";

const CommentsPage = () => {
  const { id } = useParams();

  return (
    <div className="main-content">
      <div>Comments Page for {id}</div>
    </div>
  );
};

export default CommentsPage;
