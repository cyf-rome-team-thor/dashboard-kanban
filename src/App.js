import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import KanbanBoard from "./containers/KanbanBoard";
import NavBar from "./components/Navbar";
import ApplicantDetailPageContainer from "./containers/ApplicantDetailPageContainer.js";
import ListView from "./containers/ListView";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/kanban" component={KanbanBoard} />
          <Route path="/list" component={ListView} />
          <Route
            path="/applicant/:id"
            component={ApplicantDetailPageContainer}
          />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
