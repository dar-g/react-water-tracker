import './App.css';
import MainPage from './containers/MainPage/components/MainPage/MainPage';
import RegisterRouting from './containers/RegisterRouting/RegisterRouting';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import UserSettings from './containers/MainPage/components/UserSettings';
import UserStatistics from './containers/MainPage/components/UserStatistics';

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
                        <RegisterRouting
                            setUserProperty={setUserProperty}
                            getUserProperty={getUserProperty}
                        />
                    </Route>
                    <Route path="/main">
                        <MainPage />
                    </Route>
                    <Route path="/user-statistics">
                        <UserStatistics />
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
