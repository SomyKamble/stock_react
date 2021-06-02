import "./App.css";
import Table from "./components/Table/Table";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TablePage from "./components/Form/FormTab";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/table" component={Table} />
          {/* <Route path="/form" component={Form} /> */}
          <Route path="/form">
            <Form/>
            </Route>
            {/* <Route path="/showtable">
              <TablePage  />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// import "./App.css";

// var KiteTicker = require("kiteconnect").KiteTicker;
// var ticker = new KiteTicker({
//   api_key: "0yvny102khsjlnpr",
//   access_token: "EdL5jjXZ3lvHxIOFnNxUJAMZkAD3Y0iZ",
// });

// ticker.connect();
// ticker.on("ticks", onTicks);
// ticker.on("connect", subscribe);

// function onTicks(ticks) {
//   console.log("Ticks", ticks);
// }

// function subscribe() {
//   var items = [738561];
//   ticker.subscribe(items);
//   ticker.setMode(ticker.modeFull, items);
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Web Socket Testing</h1>
//     </div>
//   );
// }

// export default App;
