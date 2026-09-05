import { Route, Switch } from "wouter";
import "./App.css";
import Home from "./Home/Home";
import Settigns from "./Settings/Settings";

function App() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/settings"} component={Settigns} />
    </Switch>
  );
}

export default App;
