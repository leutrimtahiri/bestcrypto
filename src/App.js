import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Contact from "./Contact";
import Head from "./Head";


function App() {
  return (
   
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Head}  />
        <Route path="/contact" exact component={Contact}  />
        </Switch>
      </Router>
    
       </div>
   
  );
}

export default App;
