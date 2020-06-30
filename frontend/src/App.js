import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

// importing routes
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";

const App = () => {
  let history = useHistory();
  // let history = useHistory();
  // const [history, setHistory] = React.useState(createBrowserHistory());

  return (
    <BrowserRouter history={history}>
      {/* routes */}
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
