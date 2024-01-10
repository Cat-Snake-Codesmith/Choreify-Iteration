import React from "react";
import MainContainer from "../containers/MainContainer.jsx";

import styles from "../stylesheets/KanbanPage.module.css";
import ColumnsContainer from "../containers/ColumnsContainer.jsx";

export default function KanbanPage() {
  return (
    <div className={styles.KanbanPage}>
      <MainContainer />
      <ColumnsContainer />
    </div>
  );
}
