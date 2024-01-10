import React from "react";
import ChoreColumn from "../components/ChoreColumn.jsx";

export default function KanbanContainer() {
  const notStarted = "NOT STARTED";
  console.log("HEYYYY ", <ChoreColumn columnStatus={"IN PROGRESS"} />);
  return (
    <>
      <ChoreColumn columnStatus={notStarted} id={"1"} />
      <ChoreColumn columnStatus={"IN PROGRESS"} id={"2"} />
      <ChoreColumn columnStatus={"COMPLETE"} id={"3"} />
    </>
  );
}
