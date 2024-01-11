/* eslint-disable import/extensions */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useGetAllChoresQuery } from "../redux/api/chores/choresApi.js";
import "../styles.css";

export default function ChoreCard({
  id,
  title,
  description,
  due_date,
  assignees_id,
  group_id,
}) {
  return (
    <div id="lane">
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Due_date: {due_date}</p>
      <p>assignees_id: {assignees_id}</p>
      <p>group_id: {group_id}</p>
    </div>
  );
}
