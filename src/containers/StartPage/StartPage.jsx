import {Link, Route, Switch} from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function NameForm(props) {
    const onClickHandler = () => {
        console.log('Name form onClickHandler');
        props.setName('Dasha')
    };

    return (
        <div className="start-screen">
            <p>Let's start</p>

            <label htmlFor="">
                Name:
                <input type="text"/>
            </label>

            {/*<button onClick={onClickHandler}>Continue</button>*/}
            <Link to="/welcome" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

function Welcome(props) {
    return (
        <div className="start-screen">
            <p>Welcome {props.getName()}</p>
        </div>
    );
}

function UserParams() {
    return (
        <div className="start-screen">

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

            <button>Save</button>
        </div>
    );
}

/*
const props = {
    setUserProperty: setUserProperty,
    getUserProperty: getUserProperty
}
*/
function StartPage({
    setUserProperty,
   getUserProperty
}) {
    const setName = (value) => setUserProperty('name', value);
    const getName = () => getUserProperty('name');

    return (
        <div className="start-screen">
            <Switch>
                <Route exact path="/">
                    <NameForm setName={setName} />
                </Route>
                <Route exact path="/welcome">
                    <Welcome getName={getName} />
                </Route>
            </Switch>
        </div>
    );
}

export default StartPage;
