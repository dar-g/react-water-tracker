import {Route, Switch, useRouteMatch} from "react-router-dom";
import NameInput from "./components/NameInput";
import AgeInput from "./components/AgeInput";
import WeightInput from "./components/WeightInput";
import GenderInput from "./components/GenderInput";

// todo: add validation for input fields, disable button

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
                    {/*<Redirect to={`${path}/name`} />*/}
                </Route>
                {/*<Route path={`${path}/name`}>*/}
                {/*    */}
                {/*</Route>*/}
                {/*<Route path={`${path}/age`}>*/}
                {/*    */}
                {/*</Route>*/}
                {/*<Route path={`${path}/weight`}>*/}
                {/*    */}
                {/*</Route>*/}
                {/*<Route path={`${path}/gender`}>*/}
                {/*    */}
                {/*</Route>*/}
            </Switch>

            <NameInput setName={setName} />
            <AgeInput getName={getName} setAge={setAge} />
            <WeightInput setWeight={setWeight} />
            <GenderInput
                setGender={setGender}
                setIsUserRegistered={setIsUserRegistered}
            />
        </div>
    );
}

export default RegisterPage;
