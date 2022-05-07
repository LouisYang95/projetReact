import React from "react";
import UsersData from "../data.json";

class Users extends React.Component {
  render() {
    return (
      <>
        <div className="users-container">
          {UsersData.map((data) => {
            return (
              <div key={data.id} className="users">{data.name + " " + data.departments}</div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Users;
