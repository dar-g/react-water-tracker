import './App.css';
import MainPage from "./containers/MainPage/MainPage";
import StartPage from "./containers/StartPage/StartPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState('');
    const [sex, setSex] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            setIsUserRegistered(true);
            setName(user.name);
            setAge(user.age);
            setWeight(user.weight);
            setSex(user.sex);
        }
    }, []);

    const getUserProperty = (key) => {
        switch (key) {
            case 'name':
                return name;
            case 'age':
                return age;
            case 'weight':
                return weight;
            case 'sex':
                return sex;
        }
    };

    const setUserProperty = (key, value) => {
        switch (key) {
            case 'name': setName(value);
            break;
            case 'age':  setAge(value);
            break;
            case 'weight': setWeight(value);
            break;
            case 'sex': setSex(value);
        }
    }


    return (
    <div className="App">
       <Router>
           <Switch>
               <Route path="/">
                   {isUserRegistered ?
                       <MainPage /> :
                       <StartPage setUserProperty={setUserProperty} getUserProperty={getUserProperty} />}
               </Route>
           </Switch>
       </Router>
    </div>
  );
}

export default App;
