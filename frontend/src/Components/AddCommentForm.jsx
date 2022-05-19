import { useState } from "react";
import { useParams } from "react-router-dom";

const AddCommentForm = () => {
  const [category, setCategory] = useState("");
  const [commentText, setCommentText] = useState("");
  const { id } = useParams();

  const handleAddCommentFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      soldier: id,
      commentor: 4, // need to add the current user id to this
      category: category,
      comment_text: commentText,
      // data_added:
    };
  };
  return (
    <div>
      <form onSubmit={handleAddCommentFormSubmit}>
        {/* <label htmlFor="soldier"></label>
        <input type="number" name="soldier" />
        <label htmlFor="commentor"></label>
        <input type="number" name="commentor" /> */}
        <label htmlFor="category"></label>
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

        <label htmlFor="comment_text"></label>
        <input
          type="text"
          name="comment_text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default AddCommentForm;
