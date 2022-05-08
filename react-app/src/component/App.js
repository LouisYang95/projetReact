import React from "react";
import Search from "./ListOfDepartments";
import Users from "./Users";
import UsersData from "../data.json";

class App extends React.Component {

// function that will be called when the page is loaded

  componentDidMount = () => {
    const datalist = document.getElementById(`datalist`);
    datalist.innerHTML = "";

    UsersData.map(async (info) => {
      var li = document.createElement("li");
      var listUsers = document.getElementById(`listUsers`);
      listUsers.appendChild(li);
      li.innerHTML = info.name ;
      for (let departments of info.departments) {
        const response = await fetch(
          `https://geo.api.gouv.fr/departements/${departments}?fields=*`
        );
        const data = await response.json();
        var optionBlock = document.createElement("option");
        if (datalist.innerHTML.includes(data.nom)) {
          console.log("already contains");
          return;
        } else {
          datalist.appendChild(optionBlock);
          optionBlock.innerHTML = data.nom;
          optionBlock.setAttribute("key", data.code);
        }
      }
    });
  };

//Function that will display list of users thanks to geo.api.gouv

  listUsers = () => {
    const datalist = document.getElementById(`datalist`);
    var optionValue = datalist.value;
    var listUsers = document.getElementById(`listUsers`);
    listUsers.innerHTML = "";
    fetch(
      `https://geo.api.gouv.fr/departements?nom=${optionValue}&fields=*`
    ).then((response) =>
      response.json().then((data) => {
        for (let dataUsers of data) {
          var dataDepartments = parseInt(dataUsers.code);

          for (let users of UsersData) {
            for (let departments of users.departments) {
              var li = document.createElement("li");
              if (departments === dataDepartments) {
                listUsers.appendChild(li);
                li.innerHTML = users.name;
              }
            }
          }
        }
      })
    );
  };

//display list of users while user click on btn
  displayUsers = () => {
    var listUsers = document.getElementById(`listUsers`);
    listUsers.innerHTML = "";
    UsersData.map(async (info) => {
      var li = document.createElement("li");
      listUsers.appendChild(li);
      // li.innerHTML = info.name + " " + info.departments;
      li.innerHTML = info.name;
    });
  };


  render() {
    return (
      <>
        <div>
          <Search listUsers={this.listUsers} displayUsers={this.displayUsers} />
        </div>
        <div>
          <Users />
        </div>
      </>
    );
  }
}

export default App;
