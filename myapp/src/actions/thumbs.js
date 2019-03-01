export const THUMBS_UP = "THUMBS_UP";
export const THUMBS_DOWN = "THUMBS_DOWN";



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