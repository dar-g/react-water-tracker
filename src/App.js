import './App.css';
import WelcomeScreen from "./containers/WelcomeScreen";
import StartScreen from "./containers/StartScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
           <Switch>
               <Route path="/start">
                   <StartScreen />
               </Route>
               <Route path="/">
                   <WelcomeScreen userName={''} />
               </Route>
           </Switch>
       </Router>
    </div>
  );
}

export default App;
