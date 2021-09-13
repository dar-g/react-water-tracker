import NavBar from './NavBar/NavBar';
import UserService from '../../../services/UserService';

function UserSettings () {
    function clearLS() {
        localStorage.clear();
    }

    const userData = UserService.getUserObjFromLS();
    const userName = userData.name;
    const userAge = userData.age;
    const userWeight = userData.weight;
    const userGender = userData.gender;

    return (
        <div className="user-settings container">
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

            <NavBar />
        </div>
    );
}

export default UserSettings;
