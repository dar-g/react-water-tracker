import css from "./ProgressBar.module.css";
import UserService from "../../../../services/UserService";

function ProgressBar ({
    count
}) {
    const dailyWaterIntake = UserService.calcRequiredWaterQuantity();

    return (
        <div className={css.progressbar}>
            <span>Drank today: </span>
            <span>{count}</span>
            <span> ml </span>
            <span>{dailyWaterIntake} of water</span>
        </div>
    );
}

export default ProgressBar;
