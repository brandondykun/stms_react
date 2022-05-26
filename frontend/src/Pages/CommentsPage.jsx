import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../Components/AddCommentForm";
import apiCalls from "../apiCalls/apiCalls";
import CommentCategoryContainer from "../Components/CommentCategoryContainer";

const CommentsPage = ({ userId }) => {
  const [allComments, setAllComments] = useState(null);
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
  }, [id]);

  return (
    <div className="primary-content">
      <div>Comments Page for {id}</div>
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
      <AddCommentForm
        allComments={allComments}
        setAllComments={setAllComments}
        userId={userId}
      />
    </div>
  );
};

export default CommentsPage;
