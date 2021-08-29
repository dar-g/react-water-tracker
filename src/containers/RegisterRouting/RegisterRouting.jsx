import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import NameForm from './components/NameForm';
import AgeForm from './components/AgeForm';
import WeightForm from './components/WeightForm';
import GenderForm from './components/GenderForm';

function RegisterRouting({
    setUserProperty,
    getUserProperty
}) {
    const setName = (value) => {
        return setUserProperty('name', value);
    };
    const getName = () => getUserProperty('name');

    const setAge = (value) => {
        return setUserProperty('age', value);
    };

    const setWeight = (value) => {
        return setUserProperty('weight', value);
    };

    const setGender = (value) => {
        return setUserProperty('gender', value);
    };

    let { path, url } = useRouteMatch();

    return (
        <div className="register-page">
            <Switch>
                <Route exact path="/register">
                    <Redirect to={`${path}/name`} />
                </Route>
                <Route path={`${path}/name`}>
                    <NameForm setName={setName} />
                </Route>
                <Route path={`${path}/age`}>
                    <AgeForm getName={getName} setAge={setAge} />
                </Route>
                <Route path={`${path}/weight`}>
                    <WeightForm setWeight={setWeight} />
                </Route>
                <Route path={`${path}/gender`}>
                    <GenderForm setGender={setGender} />
                </Route>
            </Switch>
        </div>
    );
}

export default RegisterRouting;
