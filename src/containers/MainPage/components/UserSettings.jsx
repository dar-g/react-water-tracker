import NavBar from './NavBar/NavBar';
// import UserService from '../../../services/UserService';

function UserSettings () {
    function clearLS() {
        localStorage.clear();
    }

    // const userData = UserService.getUserObjFromLS();

    return (
        <div className="user-settings container">
            <h1>User Settings</h1>

            <p>Your info:</p>

            <button onClick={clearLS} className="btn">
                Logout
            </button>

            <NavBar />
        </div>
    );
}

export default UserSettings;
