import './App.css';
import TableProjects from "./Pages/TableProjects";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {TableHours} from "./Pages/TableHours";
import ListHours from "./Pages/TableHours/List/ListHours";

function App() {
  return (
      <div className={"App"}>
          <Router>
              <Switch>
                  <Route path="/hours/"  render={props => <TableHours {...props}></TableHours>} name={"Adriel"} >
                  </Route>
                  <Route path="/">
                      <TableProjects></TableProjects>
                  </Route>
              </Switch>
          </Router>
      </div>

  );
}

export default App;
