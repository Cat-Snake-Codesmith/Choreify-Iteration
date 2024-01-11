import React from "react";
import ChoreColumn from "../components/ChoreColumn.jsx";
import styles from "../stylesheets/containers/ColumnsContainer.module.css";
export default function ColumnsContainer() {
  // const notStarted = "NOT STARTED";
  // //   console.log("HEYYYY ", <ChoreColumn columnStatus={"IN PROGRESS"} />);
  // const myColumns = [];
  // const myStatus = ["NOT STARTED", "IN PROGRESS", "COMPLETE"];

  // for (let i = 0; i < myStatus.length; i++) {
  //   myColumns.push(<ChoreColumn columnStatus={myStatus[i]} />);
  // }
  // console.log("myColumns ", myColumns);
  return (
    <div className={styles.columnsContainer}>
      <ChoreColumn columnStatus="NOT STARTED" />
      <ChoreColumn columnStatus="IN PROGRESS" />
      <ChoreColumn columnStatus="COMPLETE" />
      {/* <ChoreColumn id="1" />
      <ChoreColumn id="2" />
      // <ChoreColumn id="3" /> */}
      {/* {myColumns} */}
    </div>
  );
}
