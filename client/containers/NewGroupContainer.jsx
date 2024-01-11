/* eslint-disable import/extensions */
import React from "react";
import styles from "../stylesheets/Groups.module.css";
import Group from "../components/Group.jsx";
import { useGetAllGroupsQuery } from "../redux/api/groups/groupsApi.js";
import { selectAllGroups } from "../redux/slices/groupsSlice.js";
import { useSelector } from "react-redux";

export default function NewGroupContainer() {
  // in here, we are going to get the data and then render that into the div
  // const { data, error, isLoading } = useGetAllGroupsQuery(); /\
  const data = useSelector(selectAllGroups);

  const groupsArr = [];

  for (let i = 0; i < data.length; i++) {
    groupsArr.push(
      <Group
        key={data[i].group_id}
        group_name={data[i].group_name}
        members={data[i].members}
      />
    );
  }

  return (
    <div class={styles.newGroupParent}>
      <h1>All Groups:</h1>
      <div className={styles.newGroupContainer}>{groupsArr}</div>
    </div>
  );
}
