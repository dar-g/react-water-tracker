import {useState} from "react";
import UserService from "../../../services/UserService";
import css from "../RegisterPage.module.css";

function WeightInput(props) {
    const [isHidden, setIsHidden] = useState(false);
    const [weightInputValue, setWeightInputValue] = useState('');
    const [weightError, setWeightError] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);

   const weightValidation = (e) => {
       let inputWeightValue = e.target.value;

       if (inputWeightValue === '') {
           setWeightError('Weight should not be empty');
           setDisableBtn(true);
       } else if (!(inputWeightValue.match(/^\d+$/))) {
           setWeightError('Weight should contain only numbers');
           setDisableBtn(true);
       } else if (inputWeightValue < 5 || inputWeightValue > 635) {
           setWeightError('Invalid weight');
           setDisableBtn(true);
       }
       else {
           setWeightInputValue(+inputWeightValue);
           setWeightError('');
           setDisableBtn(false);
       }
    }

    const saveWeight = () => {
        props.setWeight(weightInputValue);
        UserService.setUserWeight(weightInputValue);
        setIsHidden(true);
    };

    return (
        <div className={`${css.registerForm} ${isHidden ? `${css.hidden}` : ''} weight-input`}>
            <div className="input-wrapper">
                <label htmlFor="">
                    Weight:
                    <input type="number" onChange={weightValidation} />
                    <span>kg</span>
                </label>
                <div className={css.error}>{weightError}</div>
            </div>

            <button
                onClick={saveWeight}
                className={`${disableBtn ? `${css.disabled}` : ''} btn`}
            >
                Continue
            </button>
        </div>
    );
}

export default WeightInput;
