import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/"} component={Introduction}/>
          <Route exact path={"/projects"} component={Project}/>
          <Route exact path={"/experience"} component={Experience}/>
          <Route exact path={"/contact_me"} component={ContactMe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
