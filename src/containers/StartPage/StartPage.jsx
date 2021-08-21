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

            <div className="form-wrapper">
                <label htmlFor="">
                    Name:
                    <input type="text" ref={inputNameRef} />
                </label>
                <input type="button" onClick={saveName} value="Save" />
            </div>

            <Link to="/register/age" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

function AgeForm(props) {
    const onClickHandler = (event) => {
        props.setAge(saveAge);
    };

    const inputAgeRef = useRef();

    const saveAge = () => {
        const ageFromInput = inputAgeRef.current.value;
        localStorage.setItem('user-age', ageFromInput);
        return ageFromInput;
    }

    return (
        <div className="age-form">
            <p>Welcome {props.getName()}</p>
            <p>Through the next several steps please enter information about you:</p>

            <div className="form-wrapper">
                <label htmlFor="">
                    Age:
                    <input type="number" ref={inputAgeRef} />
                </label>
                <input type="button" onClick={saveAge} value="Save" />
            </div>

            <Link to="/register/weight" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

function WeightForm(props) {
    const onClickHandler = (event) => {
        props.setWeight(saveWeight);
    };

    const inputWeightRef = useRef();

    const saveWeight = () => {
        const weightFromInput = inputWeightRef.current.value;
        localStorage.setItem('user-weight', weightFromInput);
        return weightFromInput;
    }

    return (
        <div className="weight-form">
            <div className="form-wrapper">
                <label htmlFor="">
                    Weight:
                    <input type="number" ref={inputWeightRef} />
                    <span>kg</span>
                </label>
                <input type="button" onClick={saveWeight} value="Save" />
            </div>

            <Link to="/register/sex" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

function SexForm(props) {
    const onClickHandler = (event) => {
        props.setSex(saveSex);
    };

    const inputSexRef = useRef();

    const saveSex = () => {
        const sexFromInput = inputSexRef.current.value;
        localStorage.setItem('user-sex', sexFromInput);
        return sexFromInput;
    }

    return (
        <div className="sex-form">
            <div className="form-wrapper">
                <label htmlFor="">
                    Sex:
                    <input type="text" ref={inputSexRef} />
                </label>
                <input type="button" onClick={saveSex} value="Save" />
            </div>

            <Link to="/main" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

function StartPage({
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

    const setSex = (value) => {
        return setUserProperty('sex', value);
    };

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
                    <AgeForm getName={getName} setAge={setAge} />
                </Route>
                <Route path={`${path}/weight`}>
                    <WeightForm setWeight={setWeight} />
                </Route>
                <Route path={`${path}/sex`}>
                    <SexForm setSex={setSex} />
                </Route>
            </Switch>
        </div>
    );
}

export default StartPage;
