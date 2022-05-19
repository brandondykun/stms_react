import { useParams } from "react-router-dom";
import AddCommentForm from "../Components/AddCommentForm";

const CommentsPage = () => {
  const { id } = useParams();

  return (
    <div className="primary-content">
      <div>Comments Page for {id}</div>
      <AddCommentForm />
    </div>
  );
};

export default CommentsPage;
