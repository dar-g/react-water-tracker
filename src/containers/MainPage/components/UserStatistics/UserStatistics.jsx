import NavBar from "../NavBar/NavBar";
import css from "./UserStatistics.module.css";
import UserService from "../../../../services/UserService";

function UserStatistics () {
    const userConsumptionArr = UserService.getUserConsumption();

    const userDay = userConsumptionArr.map(item => {
        const calcEachDayDrankPercent = UserService.calcDrankPercent(item.water);
        const progressLineWidth = { width: calcEachDayDrankPercent+'%' };
        const dateOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        };
        const prettyDate = new Date(item.date).toLocaleDateString('en-EN', dateOptions);

        return (
            <div key={item.date} className={css.statisticsDay}>
                <div className={css.date}>{prettyDate}</div>
                <div className={css.waterHolder}>
                    <div className={css.water} style={progressLineWidth} />
                </div>
            </div>
        );
    });

    return (
        <div className="user-statistics container">
            <div className={css.content}>
                <h1>User Statistics</h1>

                <div className={css.statisticsChart}>
                    {userDay}
                </div>
            </div>

            <NavBar />
        </div>
    );
}

export default UserStatistics;
