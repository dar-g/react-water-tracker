import NavBar from "./NavBar/NavBar";
import css from "./WaterTracker/WaterTracker.module.css";

function UserStatistics () {
    return (
        <div className="user-statistics container">
            <div className={css.content}>
                <h1>User Statistics</h1>
            </div>

            <NavBar />
        </div>
    );
}

export default UserStatistics;
