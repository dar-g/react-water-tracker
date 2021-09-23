import NavBar from "./NavBar/NavBar";
import UserService from "../../../services/UserService";
import clearLS from "../../../helpers/clearLS";
import css from "./WaterTracker/WaterTracker.module.css";

function UserSettings () {
    const userData = UserService.getUserObjFromLS();
    const userName = userData.name;
    const userAge = userData.age;
    const userWeight = userData.weight;
    const userGender = userData.gender;

    return (
        <div className="user-settings container">
            <div className={css.content}>
                <h1>User Settings</h1>

                <p>Your info:</p>
                <p>Name: {userName ? userName : 'No user name'}</p>
                <p>Age: {userAge ? userAge : 'No user age info'}</p>
                <p>Weight: {userWeight ? userWeight : 'No user weight info'}</p>
                <p>Gender: {userGender ? userGender : 'User gender not selected'}</p>

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
