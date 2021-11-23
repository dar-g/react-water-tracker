import css from "./ProgressBar.module.css";
import UserService from "../../../../services/UserService";

function ProgressBar ({
    count
}) {
    const dailyWaterIntake = UserService.calcRequiredWaterQuantity();
    const calcDrankPercent = count / dailyWaterIntake * 100;
    const progressLineWidth = { width: calcDrankPercent+'%' };
    const normFulfilled = count >= dailyWaterIntake ? { 'border-color': 'limegreen' } : {};

    return (
        <div className="progressBarWrapper">
            <div className={css.progressBarText}>
                <span>Drank today: </span>
                <span>{count} / {dailyWaterIntake} ml of water</span>
            </div>
            <div className={css.progressBarHolder} style={normFulfilled}>
                <div className={css.progressBar} style={progressLineWidth} />
            </div>
        </div>
    );
}

export default ProgressBar;
