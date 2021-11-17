import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import NameInput from "./components/NameInput";
import AgeInput from "./components/AgeInput";
import WeightInput from "./components/WeightInput";
import GenderInput from "./components/GenderInput";

// todo: one page of registration instead of four
function RegisterPage({
  setUserProperty,
  getUserProperty,
  setIsUserRegistered,
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

    let { path } = useRouteMatch();

    return (
        <div className="register-page container">
            <Switch>
                <Route exact path="/register">
                    <Redirect to={`${path}/name`} />
                </Route>
                <Route path={`${path}/name`}>
                    <NameInput setName={setName} />
                </Route>
                <Route path={`${path}/age`}>
                    <AgeInput getName={getName} setAge={setAge} />
                </Route>
                <Route path={`${path}/weight`}>
                    <WeightInput setWeight={setWeight} />
                </Route>
                <Route path={`${path}/gender`}>
                    <GenderInput
                      setGender={setGender}
                      setIsUserRegistered={setIsUserRegistered}
                    />
                </Route>
            </Switch>
        </div>
    );
}

export default RegisterPage;
