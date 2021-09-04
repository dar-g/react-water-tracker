import {Link} from 'react-router-dom';

function UserStatistics () {
    return (
        <div className="user-statistics container">
            <h1>User Statistics</h1>
            <Link to="/main" className="btn">Back to main</Link>
        </div>
    );
}

export default UserStatistics;
