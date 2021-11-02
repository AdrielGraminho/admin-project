import './App.css';
import TableProjects from "./Pages/TableProjects";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {TableHours} from "./Pages/TableHours";
import {HoursEdit} from "./Pages/HoursEdit";
import {SaveHour} from "./Pages/SaveHour";
import {Login} from "./Pages/Login";

function App() {
  return (
      <div className={"App"}>
          <nav></nav>
          <Router>
              <Switch>
                  <Route path="/saveHour/"  render={props => <SaveHour {...props}></SaveHour>} >
                  </Route>
                  <Route path="/hours/"  render={props => <TableHours {...props}></TableHours>} >
                  </Route>
                  <Route path="/editHours/"  render={props => <HoursEdit {...props}></HoursEdit>}>
                  </Route>
                  <Route path="/projects"><TableProjects></TableProjects></Route>
                  <Route path="/"><Login></Login></Route>
              </Switch>
          </Router>
      </div>

  );
}

export default App;
