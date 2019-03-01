import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMBS_UP,
  THUMBS_DOWN,
} from "../actions/actions";


export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [   
          {
            id: action.payload.id,
            text: action.payload.text,
            votes: 0
          },
          ...state
      ];
    case REMOVE_COMMENT:
      return  state.filter(comment => comment.id !== action.payload.id)
      
    case EDIT_COMMENT:
      return state.map(comment =>         
          comment.id === action.payload.id ? 
        {...comment, text:action.payload.text} 
        : comment
        );
      
  case THUMBS_UP:
      return state.map(comment =>         
          comment.id === action.payload.id 
          ? {...comment, votes: comment.votes + 1}
          : comment
        );     
  case THUMBS_DOWN:
      return state.map(comment =>
          comment.id === action.payload.id
          ? {...comment, votes: comment.votes - 1} 
          : comment
        );
      
    default:
      return state;
  }
};