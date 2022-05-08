import React from "react";


class Users extends React.Component {
  render() {
    return (
      <>
        <div className="users-container">
        <label> List of users: </label>
          <ul id="listUsers" >
          </ul>
        </div>
      </>
    );
  }
}
export default Users;
