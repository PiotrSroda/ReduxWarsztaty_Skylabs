import React from "react";
import { connect } from "react-redux";
import AddComment from "./AddComment";

import { thumbsUp, thumbsDown, removeComment } from "./actions/actions";

export const CommentRaw = ({
  text,
  votes,
  id,
  thumbsUp,
  thumbsDown,
  removeComment
}) => (
  <div>
    <li>
      {text} <span>votes: {votes} </span>
      <button onClick={() => thumbsUp(id)}>Vote Up</button>
      <button onClick={() => thumbsDown(id)}>Vote Down</button>
      <button onClick={() => removeComment(id)}>Remove Comment</button>
    </li>
  </div>
);

export const Comment = connect(
  null,
  { thumbsUp, thumbsDown, removeComment }
)(CommentRaw);
