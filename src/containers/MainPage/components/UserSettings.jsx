import NavBar from "./NavBar/NavBar";
import UserService from "../../../services/UserService";
import clearLS from "../../../helpers/clearLS";
import css from "./WaterTracker/WaterTracker.module.css";
import {useEffect, useState} from "react";

function UserSettings () {

    const [userName, setUserName] = useState('-');
    const [userAge, setUserAge] = useState('-');
    const [userWeight, setUserWeight] = useState('-');
    const [userGender, setUserGender] = useState('-');

    useEffect(() => {
        UserService.getUserObjFromLS()
            .then((res) => {
                const userData = JSON.parse(res);
                setUserName(userData.name);
                setUserAge(userData.age);
                setUserWeight(userData.weight);
                setUserGender(userData.gender);
            })
            .catch((error) => {

            });
    }, []);

    return (
        <div className="user-settings container">
            <div className={css.content}>
                <h1>User Settings</h1>

                <p>Your info:</p>
                <p>Name: {userName}</p>
                <p>Age: {userAge}</p>
                <p>Weight: {userWeight}</p>
                <p>Gender: {userGender}</p>

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
