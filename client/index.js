import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider, useDispatch } from "react-redux";
import { fetchChores } from "./redux/slices/choresSlice.js";
import { BrowserRouter } from "react-router-dom";
import { useGetAllChoresQuery } from "../client/redux/api/chores/choresApi.js";
import styles from "./stylesheets/Root.module.css";
import { fetchAllGroups } from "./redux/slices/groupsSlice.js";

// this will first go to the dom, and get the div with the id of "root",
// and then render the app into that
const domNode = document.getElementById("root");
const root = createRoot(domNode);
const dispatch = useDispatch();
dispatch(fetchChores);
store.dispatch(fetchAllGroups);
root.render(
  <div className={styles.rootContainer}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);

const { data, error, isLoading } = useGetAllChoresQuery();
