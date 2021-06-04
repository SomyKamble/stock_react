import "./App.css";
import React,{ useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Table from "./components/Table/Table";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import StockTable from "./components/stockTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LazyLoad from 'react-lazyload';

// import TablePage from "./components/Form/FormTab";



function App() {
  
//   const [ locationKeys, setLocationKeys ] = React.useState([])
// const history = useHistory()

// useEffect(() => {
//   return history.listen(location => {
//     if (history.action === 'PUSH') {
//       setLocationKeys([ location.key ])
//       console.log('RELOAD');
//     }

//     if (history.action === 'POP') {
//       if (locationKeys[1] === location.key) {
//         setLocationKeys(([ _, ...keys ]) => keys)
//         console.log('FRONT');
//         // Handle forward event

//       } else {
//         setLocationKeys((keys) => [ location.key, ...keys ])
//         console.log('BACK');
//         // Handle back event

//       }
//     }
//   })
// }, [ locationKeys, ])
  

// if (window.performance) {
//   if (performance.navigation.type == 1) {
//     console.log( "This page is reloaded" );
//   } else  {
//     console.log( "This page is not reloaded");
//   }
  

// }

window.onhashchange = function() {
 console.log("BACK2");
 }
 window.onhashchange();

  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          {/* <LazyLoad> */}
            <Route path="/table" component={Table} />
          {/* </LazyLoad> */}
          <Route path="/table" component={Table} />
          <LazyLoad>
          <Route path="/stocktable" component={StockTable} />
          </LazyLoad>
          <Route path="/form">
            <Form/>
            </Route>
           
        </Switch>
        </Router>
    </div>
  );
}

export default App;
