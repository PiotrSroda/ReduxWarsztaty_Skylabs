import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/store";
import { addComment, removeComment, editComment, thumbsUp, thumbsDown } from "./actions/actions";


import App from './App.js'

window.store = store;
window.addComment = addComment;
window.removeComment = removeComment;
window.editComment = editComment;
window.thumbsUp = thumbsUp;
window.thumbsDown = thumbsDown;

store.subscribe(() => console.log("Yeah! It's Redux!"));

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById("root")
	);
