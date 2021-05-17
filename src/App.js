import "./App.css";
import Table from "./components/Table/Table";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/table" component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
