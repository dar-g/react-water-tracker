import NavBar from "./NavBar/NavBar";
import clearLS from "../../../helpers/clearLS";
import css from "./WaterTracker/WaterTracker.module.css";
import {useState} from "react";

function UserSettings ({getUserProperty}) {
    const [userName, setUserName] = useState(getUserProperty('name'));
    const [userAge, setUserAge] = useState(getUserProperty('age'));
    const [userWeight, setUserWeight] = useState(getUserProperty('weight'));
    const [userGender, setUserGender] = useState(getUserProperty('gender'));

    return (
        <div className="user-settings container">
            <div className={css.content}>
                <h1>User Settings</h1>

                <p>Your info:</p>
                <p>Name: {userName || '-'}</p>
                <p>Age: {userAge || '-'}</p>
                <p>Weight: {userWeight || '-'}</p>
                <p>Gender: {userGender || '-'}</p>

                <button className="btn">Edit info</button>

                <button onClick={clearLS} className="btn">
                    Logout
                </button>
            </div>

            <NavBar />
        </div>
    );
}

export default UserSettings;
