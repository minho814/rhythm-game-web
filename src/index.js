/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import configureStore, { history } from "./store/configureStore";
import Root from "./components/Root";

require("./favicon.ico"); // Tell webpack to load favicon.ico
const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("app")
);
