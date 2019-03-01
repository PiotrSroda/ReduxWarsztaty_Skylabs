import React from "react";
import { connect } from "react-redux";

import { Comment } from "./Comment";

const mapStateToProps = state => ({
  comments: state.comments
});

const CommentsListRaw = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

export const CommentList = connect(mapStateToProps)(CommentsListRaw);