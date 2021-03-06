import {useState} from "react";
import UserService from "../../../services/UserService";
import css from "../RegisterPage.module.css";

function AgeInput(props) {
    const [isHidden, setIsHidden] = useState(false);
    const [ageInputValue, setAgeInputValue] = useState('');
    const [ageError, setAgeError] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);

    const ageValidation = (e) => {
        let inputAgeValue = e.target.value;

        if (inputAgeValue === '') {
            setAgeError('Age should not be empty');
            setDisableBtn(true);
        } else if (!(inputAgeValue.match(/^\d+$/))) {
            setAgeError('Age should contain only numbers');
            setDisableBtn(true);
        } else if (inputAgeValue <= 0 || inputAgeValue > 120) {
            setAgeError('Unbelievable age');
            setDisableBtn(true);
        } else {
            setAgeInputValue(+inputAgeValue);
            setAgeError('');
            setDisableBtn(false);
        }
    }

    const saveAge = () => {
        props.setAge(ageInputValue);
        UserService.setUserAge(ageInputValue);
        setIsHidden(true);
    };

    return (
        <div className={`${css.registerForm} ${isHidden ? `${css.hidden}` : ''} age-input`}>
            <p>Welcome {props.getName()}</p>
            <p>Through the next several steps please enter information about you:</p>

            <div className="input-wrapper">
                <label htmlFor="">
                    Age:
                    <input
                        type="number"
                        placeholder="How old are you?"
                        onChange={ageValidation}
                    />
                </label>
                <div className={css.error}>{ageError}</div>
            </div>

            <button
                onClick={saveAge}
                className={`${disableBtn ? `${css.disabled}` : ''} btn`}
            >
                Continue
            </button>
        </div>
    );
}

export default AgeInput;
