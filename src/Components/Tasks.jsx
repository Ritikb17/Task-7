import React, { useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "./GlobalState";

const Tasks = () => {
  // Use the useGlobalState hook to access the globalVariable and functions
  const { globalVariable } = useGlobalState();
  const array = [];
  const arrayData = [];
  let [TaskAry, changeTaskAry] = useState();
  let [temp, changeTemp] = useState();
  function addNewElementToTemp(val) {
    array.push(val);
    // console.log("setting val ");
    // const ref = {
    //   ...temp,
    //   val,
    // };
    // changeTaskAry(ref);
  }

  // Convert the globalVariable object into an array of data for easy iteration
  console.log(globalVariable);
  const da = Object.values(globalVariable);
  const dat = Object.values(da);
  const [loop, changeLopp] = useState();
  let data = Object.values(dat);
  console.log("this is global ", globalVariable.length);
  Object.entries(data).map(([key, value]) => {
    Object.entries(value).map(([key1, value1]) => {
      Object.entries(value1).map(([key2, value2]) => {
        array.push(value2);
      });
    });
  });

  console.log("tte", array);

  for (let k = 0; k < array.length; k++) {
    console.log(array[k][0].length);
    if (array[k][0].length > 1) {
      arrayData.push(array[k]);
    }
  }
  console.log("Data", arrayData);
  // let length = 1;
  // for (let l = 0; l < array.length; l++) {
  //   if (array[l].Name) {
  //     if (length == 1) {
  //       console.log("pushing ");
  //       arrayListNames.push(array[l].Name);
  //     }
  //     length = l + 1;
  //   } else {
  //     arrayListinfo.push(
  //       array[l].Email,
  //       array[l].Password,
  //       array[l].creatinonTime,
  //       array[l].IP
  //     );
  //     length = 1;
  //   }
  // }

  // console.log(arrayListNames);
  // console.log(arrayListinfo);

  function sd() {
    let rows = [];
    let count = -4;
    for (let i = 0; i < arrayData.length; i++) {
      count = count + 4;
      rows.push(
        <tr>
          {/* <td>{arrayListNames[i]}</td> */}
          <td>{arrayData[i][0][0].Name}</td>
          <td>{arrayData[i][0][1].ListDiscription}</td>
          <td>{arrayData[i][0][1].ListName}</td>

          <td>{arrayData[i][0].ListName}</td>
          <td>{new Date().toLocaleTimeString()}</td>
        </tr>
      );
    }
    return rows;
  }

  return (
    <div>
      <Nav />
      <table>
        {/* Table header */}
        <thead>
          <tr>
            <th>Task Title </th>
            {/* <th>user Name</th> */}

            <th>Task des</th>
            <th>Task List title </th>
            <th>Creation Time </th>
          </tr>
        </thead>
        <tbody>{sd()}</tbody>
      </table>
    </div>
  );
  // for (let k = 0; k < globalVariable.length; k++) {
  //   console.log("adfas", globalVariable[k]);
  // }
  // console.log(data[0].reff[0][0][0].Email);
  // console.log(data[0][0][0]);
  // const Row = [];
  // function sd() {
  //   let rows = [];
  //   console.log(data);
  //   // Iterate over data and create table rows
  //   data.forEach((dd, index) => {
  //     console.log(dd);
  //     let dk = dd.reff;
  //     // Iterate over `dd` array to extract and render table rows
  //     dk.forEach((dataItem, i) => {
  //       // Extract the email, update time, and sign-up time from the 3D array
  //       const email = dataItem[0][i].Name;
  //       const Password = dataItem[0][0].Password;
  //       const signUpTime = dataItem[0][0].LastUpdate;
  //       const IP = dataItem[0][0].IP || "171.79.131.228";

  //       // Create a table row and push it into rows array
  //       rows.push(
  //         <tr key={`${index}-${i}`}>
  //           <td>{email}</td>
  //           <td>{Password}</td>

  //           <td>{IP}</td>
  //           <td>{signUpTime}</td>
  //         </tr>
  //       );
  //     });
  //   });

  //   // Return the rows array
  //   console.log(rows);
  //   return rows;
  // }

  // return (
  //   <div>
  //     <Nav />
  //     <table>
  //       {/* Table header */}
  //       <thead>
  //         <tr>
  //           <th>Task Title</th>
  //           <th>Descr</th>

  //           <th>List Title</th>
  //           <th>Creation Time</th>
  //         </tr>
  //       </thead>
  //       <tbody>{sd()}</tbody>
  //     </table>
  //   </div>
  // );
};

export default Tasks;