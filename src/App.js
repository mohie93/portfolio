import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/reusable/Navbar";
import Introduction from "./components/Introduction";
import ContactMe from "./components/ContactMe";
import WorkHistory from "./components/WorkHistory";
import Project from "./components/Project";
import NoMatch from "./components/reusable/NoMatch";

function App() {

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Switch>
          <Route exact path={"/"} render= {() => <Redirect to="/index" />}/>
          <Route exact path={"/index"} component={Introduction}/>
          <Route exact path={"/projects"} component={Project}/>
          <Route exact path={"/work_history"} component={WorkHistory}/>
          <Route exact path={"/contact_me"} component={ContactMe}/>
          <Route path="*"> <NoMatch/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
