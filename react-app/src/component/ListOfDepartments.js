import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title1" id="title1">
          Hello !
        </h1>
        <div className="select-users">
          <label> Choose a department : </label>
          <select id="datalist" onChange={this.props.listUsers}></select>

          <button onClick={this.props.displayUsers} className="btn">
            Back to list of users
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
