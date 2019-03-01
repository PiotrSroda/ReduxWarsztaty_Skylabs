let commentID = 0;

export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const THUMBS_UP = "THUMBS_UP";
export const THUMBS_DOWN = "THUMBS_DOWN";

export const addComment = text => ({
  type: ADD_COMMENT,
  payload: {
    id: commentID++,
    text
  }
});

export const removeComment = id => ({
  type: REMOVE_COMMENT,
  payload: {
    id
  }
});

export const editComment = ({text, id}) => ({
  type: EDIT_COMMENT,
  payload: {
    id,
    text
  }
});

export const thumbsUp = id => ({
  type: THUMBS_UP,
  payload: {    
    id
  }
});

export const thumbsDown = id => ({
  type: THUMBS_DOWN,
  payload: {
    id
  }
});


