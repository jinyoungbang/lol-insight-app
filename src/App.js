import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Insights from './components/Insights/Insights';
import UserNotFoundPage from "./components/Error/UserNotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/insights/:region/" component={UserNotFoundPage} />
          <Route exact path="/insights/:region/:name" component={Insights} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
