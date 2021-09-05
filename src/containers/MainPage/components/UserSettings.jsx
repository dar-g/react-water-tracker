import NavBar from './NavBar';

function UserSettings () {
    function clearLS() {
        localStorage.clear();
    }

    return (
        <div className="user-settings container">
            <h1>User Settings</h1>

            <p>Your info:</p>
            {/*<NameForm />*/}
            {/*<AgeForm />*/}
            {/*<WeightForm />*/}
            {/*<GenderForm />*/}

            <button onClick={clearLS} className="btn">
                Logout
            </button>

            <NavBar />
        </div>
    );
}

export default UserSettings;
