import {Link, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {useRef} from "react";

function NameForm(props) {
    const onClickHandler = (event) => {
        props.setName(saveName);
    };

    const inputNameRef = useRef();

    //todo: add helper in UserService which updates user property in LS

    const saveName = () => {
        const nameFromInput = inputNameRef.current.value;
        localStorage.setItem('user', nameFromInput);
        return nameFromInput;
    }

    //todo: add validation for input fields, disable button

    return (
        <div className="start-screen">
            <p>Let's start</p>

            <div className="name-wrapper">
                <label htmlFor="">
                    Name:
                    <input type="text" ref={inputNameRef} />
                </label>
                <input type="button" onClick={saveName} value="Save" />

                <Link to="/register/age" onClick={onClickHandler}>Continue</Link>
            </div>
        </div>
    );
}

//todo: make 3 separate components age, weight, etc.
function Welcome(props) {
    return (
        <div className="start-screen">
            <p>Welcome {props.getName()}</p>
            <p>Please enter information about you:</p>
            <UserParams />
        </div>
    );
}

function UserParams() {
    return (
        <div className="start-screen">
            <div className="user-form">
                <div className="input-wrapper">
                    <label htmlFor="">
                        Age:
                        <input type="text"/>
                    </label>

                    <label htmlFor="">
                        Weight:
                        <input type="text"/>
                    </label>

                    <label htmlFor="">
                        Sex:
                        <input type="text"/>
                    </label>
                </div>
                <button>Save</button>
            </div>
        </div>
    );
}

/*
const props = {
    setUserProperty: setUserProperty,
    getUserProperty: getUserProperty
}
*/
// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         };
//     };
// }
function StartPage({
    setUserProperty,
    getUserProperty
}) {
    // const curriedSetUserProperty = curry(setUserProperty);
    // const setName = curriedSetUserProperty('name');
    const setName = (value) => {
        return setUserProperty('name', value)
    };
    const getName = () => getUserProperty('name');

    let { path, url } = useRouteMatch();

    return (
        <div className="start-screen">
            <Switch>
                <Route exact path="/register">
                    <Redirect to={`${path}/name`} />
                </Route>
                <Route path={`${path}/name`}>
                    <NameForm setName={setName} />
                </Route>
                <Route path={`${path}/age`}>
                    <Welcome getName={getName} />
                </Route>
            </Switch>
        </div>
    );
}

export default StartPage;
