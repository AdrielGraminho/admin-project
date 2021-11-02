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

function App() {
  return (
      <div className={"App"}>
          <Router>
              <Switch>
                  <Route path="/saveHour/"  render={props => <SaveHour {...props}></SaveHour>} >
                  </Route>
                  <Route path="/hours/"  render={props => <TableHours {...props}></TableHours>} >
                  </Route>
                  <Route path="/editHours/"  render={props => <HoursEdit {...props}></HoursEdit>}>
                  </Route>
                  <Route path="/tableProjects">
                      <TableProjects></TableProjects>
                  </Route>
              </Switch>
          </Router>
      </div>

  );
}

export default App;
