import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello !</h1>
        {/* <input
          id="value"
          type="search"
          placeholder="Search"
          name="positionode"
          list="datalist"
          onChange={this.props.renderDepartments}
        /> */}
          <label> Choose a town: </label>
        <select id="datalist" >
        </select>
      </div>
    );
  }
}

export default Search;
