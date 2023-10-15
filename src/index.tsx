import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  unstable_HistoryRouter as HistoryBrowser,
  Route,
  Routes,
} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import HomeTemplate from "./Template/HomeTemplate";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Search from "./Pages/Search";
import { history } from "./Utils/setting";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoryBrowser history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />

          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>

          <Route path="search">
            <Route path=":keyword" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </HistoryBrowser>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
