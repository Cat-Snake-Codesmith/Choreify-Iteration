import React from "react";
import MainContainer from "../containers/MainContainer.jsx";
import ColumnsContainer from "../containers/ColumnsContainer.jsx";
import styles from "../stylesheets/KanbanPage.module.css";

export default function KanbanPage() {
  return (
    <div className={styles.KanbanPage}>
      <MainContainer />
      <ColumnsContainer />
    </div>
  );
}
