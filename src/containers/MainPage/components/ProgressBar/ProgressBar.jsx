import css from "./ProgressBar.module.css";
import UserService from "../../../../services/UserService";

function ProgressBar ({
    count
}) {
    const requiredWaterQuantity = UserService.calcRequiredWaterQuantity();
    const calcTodayDrankPercent = UserService.calcDrankPercent(count);
    const progressLineWidth = { width: calcTodayDrankPercent+'%' };
    const normFulfilled = count >= requiredWaterQuantity ? { 'borderColor': 'limegreen' } : {};

    return (
        <div className="progressBarWrapper">
            <div className={css.progressBarText}>
                <span>Drank today: </span>
                <span>{count} / {requiredWaterQuantity} ml of water</span>
            </div>
            <div className={css.progressBarHolder} style={normFulfilled}>
                <div className={css.progressBar} style={progressLineWidth} />
            </div>
        </div>
    );
}

export default ProgressBar;
