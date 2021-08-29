import {Link} from "react-router-dom";

function UserSettings () {
    return (
        <div className="user-settings">
            <h1>User Settings</h1>

            <p>Your info:</p>
            {/*<NameForm />*/}
            {/*<AgeForm />*/}
            {/*<WeightForm />*/}
            {/*<GenderForm />*/}

            <Link to="/main" className="btn">Back to main</Link>
        </div>
    );
}

export default UserSettings;
