import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../Components/AddCommentForm";
import apiCalls from "../apiCalls/apiCalls";
import CommentCategoryContainer from "../Components/CommentCategoryContainer";

const CommentsPage = ({ loggedInSoldier }) => {
  const [allComments, setAllComments] = useState(null);
  const [soldier, setSoldier] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    apiCalls
      .getAllComments()
      .then((res) => {
        const userComments = res.data.filter((comment) => {
          return comment.soldier === parseInt(id);
        });
        setAllComments(userComments);
      })
      .catch((err) => {
        console.log(err);
      });
    apiCalls
      .getSoldierById(id)
      .then((res) => {
        if (res.status === 200) {
          setSoldier(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="primary-content">
      {soldier && (
        <h1 className="page-title">
          Comments for {soldier.rank} {soldier.first_name} {soldier.last_name}
        </h1>
      )}
      <CommentCategoryContainer
        allComments={allComments}
        category={"CHARACTER"}
      />
      <CommentCategoryContainer
        allComments={allComments}
        category={"PRESENCE"}
      />
      <CommentCategoryContainer
        allComments={allComments}
        category={"INTELLECT"}
      />
      <CommentCategoryContainer allComments={allComments} category={"LEADS"} />
      <CommentCategoryContainer
        allComments={allComments}
        category={"DEVELOPS"}
      />
      <CommentCategoryContainer
        allComments={allComments}
        category={"ACHIEVES"}
      />
      <CommentCategoryContainer
        allComments={allComments}
        category={"OVERALL"}
      />
      {loggedInSoldier.id !== parseInt(id) && (
        <AddCommentForm
          allComments={allComments}
          setAllComments={setAllComments}
          loggedInSoldier={loggedInSoldier}
        />
      )}
    </div>
  );
};

export default CommentsPage;
