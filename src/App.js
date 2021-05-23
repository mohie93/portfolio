import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import NoMatch from "./components/NoMatch";
import {useState} from "react";

function App() {
  let [count, setCount] = useState(0);

  const setCountValue = () => {
    console.log(count)
    setCount(0);
  }

  return (
    <div className="App">
      <Navbar/>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/"} component={() => <Introduction setCountValue={setCountValue}/>}/>
          <Route exact path={"/projects"} component={Project}/>
          <Route exact path={"/experience"} component={Experience}/>
          <Route exact path={"/contact_me"} component={ContactMe}/>
          <Route path="*"> <NoMatch/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
