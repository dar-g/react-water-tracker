import {Link} from "react-router-dom";

// todo: main page components
function MainPage() {
    function clearLS() {
        localStorage.clear();
    }

    return (
        <div className="main-page">
            <h1>Main page</h1>
            <p>We are here when user logged in</p>
            <input type="button" onClick={clearLS} value="Log out" />

            <Link to="/user-settings" className="btn">User Settings</Link>
        </div>
    );
}

export default MainPage;
