import { useEffect, useState } from "react";

const CommentCategoryContainer = ({ allComments, category }) => {
  const [commentsFilteredByCategory, setCommentsFilteredByCategory] =
    useState(null);

  useEffect(() => {
    const filteredComments = allComments
      ? allComments.filter((comment) => {
          return comment.category === category;
        })
      : null;
    setCommentsFilteredByCategory(filteredComments);
  }, [allComments]);

  return (
    <div className="comments-container">
      <div className="comments-container-title">{category}</div>
      <div className="comments-content-container">
        {commentsFilteredByCategory &&
          commentsFilteredByCategory.map((comment) => {
            return <div key={comment.id}>-{comment.comment_text}</div>;
          })}
        {commentsFilteredByCategory &&
          commentsFilteredByCategory.length === 0 && <div>No Comments</div>}
      </div>
    </div>
  );
};

export default CommentCategoryContainer;
