import './App.css';
import MainPage from "./containers/MainPage/MainPage";
import RegisterRouting from "./containers/RegisterRouting/RegisterRouting";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import {useState, useEffect} from "react";
import UserSettings from "./containers/MainPage/UserSettings";

function App() {
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [gender, setGender] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            setIsUserRegistered(true);
            setName(user.name);
            setAge(user.age);
            setWeight(user.weight);
            setGender(user.gender);
        }
    }, []);
    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty
    // array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from
    // props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly
    // from how the dependencies array always works. If you pass an empty array ([]), the props and state
    // inside the effect will always have their initial values.

    const getUserProperty = (key) => {
        switch (key) {
            case 'name':
                return name;
            case 'age':
                return age;
            case 'weight':
                return weight;
            case 'gender':
                return gender;
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
            case 'gender': setGender(value);
        }
    }


    return (
        <div className="App">
            <Router>
                <Switch>
                     <Route exact path="/">
                        {isUserRegistered ?
                            <Redirect to="/main" /> :
                            <Redirect to="/register" />
                        }
                    </Route>
                    <Route path="/register">
                        <RegisterRouting setUserProperty={setUserProperty} getUserProperty={getUserProperty} />
                    </Route>
                    <Route path="/main">
                        <MainPage />
                    </Route>
                    <Route path="/user-settings">
                        <UserSettings />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
