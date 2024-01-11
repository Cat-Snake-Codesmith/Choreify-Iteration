/* eslint-disable import/extensions */
import React from "react";
import CreateChore from "../components/CreateChore.jsx";
import ChoreCard from "../components/ChoreCard.jsx";
// import "../styles.css";

import { fetchChores } from "../redux/slices/choresSlice.js";
import { useSelector } from "react-redux";
import { selectAllChores } from "../redux/slices/choresSlice.js";
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";

export default function MainContainer() {
  const { data, error, isLoading } = useGetAllChoresQuery();

  return (
    <div>
      <div id="swimLanes">
        <CreateChore />
      </div>
    </div>
  );
}
