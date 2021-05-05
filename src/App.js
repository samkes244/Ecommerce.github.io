import "./App.css";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Productmobile from "./components/Productmobile";
import Productbooks from "./components/Productbooks";
import Productkitchen from "./components/Productkitchen";
import Kitchen from "./components/Kitchen";
import Books from "./components/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Books-Details">
            <Header />
            <Productbooks />
          </Route>
          <Route path="/Kitchen-Details">
            <Header />
            <Productkitchen />
          </Route>
          <Route path="/Mobile-Details">
            <Header />
            <Productmobile />
          </Route>
          <Route path="/Mobile">
            <Header />
            <Mobile />
          </Route>
          <Route path="/Books">
            <Header />
            <Books />
          </Route>
          <Route path="/Kitchen">
            <Header />
            <Kitchen />
          </Route>
          <Route path="/">
            <Header />
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
