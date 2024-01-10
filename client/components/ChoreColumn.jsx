import React from "react";
// import { selectAllChoresFromStatus } from "../redux/slices/choresSlice.js";
import { useSelector } from "react-redux";
import ChoreCard from "./ChoreCard.jsx";
import styles from "../stylesheets/ChoreColumn.module.css";

export default function ChoreColumn(props) {
  // const chores = useSelector(selectAllChoresFromStatus("NOT DONE"));
  const chores = [
    {
      id: "1",
      title: "chore1",
      decription: "descrhption 1",
      due_date: "10/10/2024",
      assignees_id: "1",
      group_id: "10",
    },
    {
      id: "2",
      title: "chore2",
      decription: "descrhption 2",
      due_date: "20/20/2024",
      assignees_id: "2",
      group_id: "20",
    },
    {
      id: "3",
      title: "chore3",
      decription: "descrhption 3",
      due_date: "30/30/2024",
      assignees_id: "3",
      group_id: "30",
    },
  ];
  console.log("chores ", chores);
  let choreCards = [];
  for (let i = 0; i < chores.length; i++) {
    choreCards.push(new ChoreCard(chores[i]));
  }
  // console.log(`should display `, choreCards);
  console.log("props ", props);
  return (
    <div className={styles.choresColumn}>
      {/* <h1>!{columnStatus}</h1> */}
      {choreCards}
    </div>
  );
}