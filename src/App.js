import "./App.css";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Productmobile from "./components/Productmobile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidetest from "./components/Sidetest";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">
            <Sidetest />
          </Route>
          <Route path="/Mobile-Details">
            <Header />
            <Productmobile />
          </Route>
          <Route path="/">
            <Header />
            <Mobile />
            <Mobile />
            <Mobile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
