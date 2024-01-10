/* eslint-disable import/extensions */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";
import "../styles.css";

export default function ChoreCard(props) {
  // const { data, isLoading, error } = useGetAllChoresQuery();
  // console.log("data ", data);

  // let cards = []
  // for(let i= i<data.length; i++){
  //   cards.push(<></>)
  // }

  return (
    <div id="lane">
      <>{JSON.stringify(props)}</>
    </div>
  );
}
