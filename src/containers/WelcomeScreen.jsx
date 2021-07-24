import {Link} from "react-router-dom";

function WelcomeScreen(props) {
    const userName = props.userName;

    return (
        <div className="welcome-card">
            Welcome {userName}

            <Link to="/start">Continue</Link>
        </div>
    );
}

export default WelcomeScreen;
