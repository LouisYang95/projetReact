import React from "react";
import Search from "./ListOfDepartments";
import Users from "./Users";
import UsersData from "../data.json";

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    const datalist = document.getElementById(`datalist`);
    datalist.innerHTML = "";
    console.log("ok");
    UsersData.map(async (info) => {
      for (let departments of info.departments) {
        const response = await fetch(
          `https://geo.api.gouv.fr/departements/${departments}?fields=nom`
        );
        const data = await response.json();
        var optionBlock = document.createElement("option");
        datalist.appendChild(optionBlock);
        optionBlock.innerHTML = data.nom;
        // if data.nom already contains in datalist, do nothing
        if (datalist.innerHTML.includes(data.nom)) {
          console.log("already contains");
          return;
        } else {
          console.log("not contains");
          optionBlock.setAttribute("key", data.code);
          optionBlock.setAttribute("value", data.nom);
        }
      }
    });
  };

  render() {
    return (
      <>
        <div>
          <Search renderDepartments={this.renderDepartments} />
        </div>
        <div>
          <Users />
        </div>
      </>
    );
  }
}

export default App;
