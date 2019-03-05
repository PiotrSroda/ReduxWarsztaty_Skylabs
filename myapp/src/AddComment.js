import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addComment } from "./actions/actions";

class AddComment extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.addComment(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Add Comment</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <button>+</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(AddComment);
