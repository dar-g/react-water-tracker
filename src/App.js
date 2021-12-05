import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import UserService from "./services/UserService";
import LoginPage from './containers/LoginPage/index';
import RegisterPage from './containers/RegisterPage/index';
import MainPage from './containers/MainPage/index';
import './App.css';

// todo: fix ESLint
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [gender, setGender] = useState('');

    useEffect(() => {
        UserService.getUserObjFromLS()
            .then((user) => {
                if (user.name) {
                  setIsUserRegistered(true);
                  setName(user.name);
                  setAge(user.age);
                  setWeight(user.weight);
                  setGender(user.gender);
                }
                setIsLoading(false);
            })
            .catch((error) => {});
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
      <React.Fragment>
        {isLoading && <div>Loading ...</div>}

        {!isLoading && (
          <div className="App">
            <Router>
              <Switch>
                 <Route
                    exact
                    path="/"
                    render={() => {
                      return isUserRegistered ?
                          <Redirect to="/main" /> :
                          <Redirect to="/register" />;
                    }}
                 >
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/register">
                  <RegisterPage
                     getUserProperty={getUserProperty}
                     setUserProperty={setUserProperty}
                     setIsUserRegistered={setIsUserRegistered}
                  />
                </Route>
                <Route path="/main">
                  <MainPage
                    isUserRegistered={isUserRegistered}
                    getUserProperty={getUserProperty}
                  />
                </Route>
              </Switch>
            </Router>
          </div>
        )}
      </React.Fragment>
    );
}

export default App;
