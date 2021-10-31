import './App.css';
import TableProjects from "./Pages/TableProjects";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <div className={"App"}>
          <Router>
              <Switch>
                  <Route path="/">
                      <TableProjects></TableProjects>
                  </Route>
              </Switch>
          </Router>
      </div>

  );
}

export default App;
