import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Workspace } from "./components/Workspace";
import { SuL } from "./components/SuL";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormDefault } from "./components/Context";
import { AdminWorkSpace } from "./components/AdminWorkSpace";
import { ResetBox } from "./components/ResetBox";

function App() {
  return (
    <div className="App">
      <FormDefault>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/workSpace/:id" component={Workspace}></Route>
            <Route path="/SuL/:id" component={SuL}></Route>
            <Route path="/admin" component={AdminWorkSpace}></Route>
            <Route path="/reset/:id" component={ResetBox}></Route>
          </Switch>
        </Router>
      </FormDefault>
    </div>
  );
}

export default App;
