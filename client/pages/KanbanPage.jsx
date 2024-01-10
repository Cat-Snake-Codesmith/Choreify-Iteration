import React from "react";
import MainContainer from "../containers/MainContainer.jsx";
import ChoresColumnContainer from "../components/ChoreColumn.jsx";
import styles from "../stylesheets/KanbanPage.module.css";

import { fetchChores } from "../redux/slices/choresSlice.js";

export default function KanbanPage() {
  return (
    <div className={styles.KanbanPage}>
      <h1>Kanban Page</h1>
      <MainContainer />
      <ChoresColumnContainer />
      <ChoresColumnContainer />
      <ChoresColumnContainer />
    </div>
  );
}
