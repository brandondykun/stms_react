import { useState } from "react";
import { useParams } from "react-router-dom";
import apiCalls from "../apiCalls/apiCalls";

const AddCommentForm = ({ allComments, setAllComments, loggedInSoldier }) => {
  const [category, setCategory] = useState("");
  const [commentText, setCommentText] = useState("");
  const { id } = useParams();

  const handleAddCommentFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      soldier: id,
      commentor: loggedInSoldier.id,
      category: category,
      comment_text: commentText,
    };

    apiCalls
      .addComment(data)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setAllComments([...allComments, res.data]);
        }
        setCategory("");
        setCommentText("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      className="flex-column-form add-comment-form"
      onSubmit={handleAddCommentFormSubmit}
    >
      <label htmlFor="category">Category</label>
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="CHARACTER">CHARACTER</option>
        <option value="PRESENCE">PRESENCE</option>
        <option value="INTELLECT">INTELLECT</option>
        <option value="LEADS">LEADS</option>
        <option value="DEVELOPS">DEVELOPS</option>
        <option value="ACHIEVES">ACHIEVES</option>
        <option value="OVERALL">OVERALL</option>
      </select>

      <label htmlFor="comment_text">Comment</label>
      <textarea
        type="text"
        name="comment_text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows="5"
        maxLength={250}
      />

      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddCommentForm;
