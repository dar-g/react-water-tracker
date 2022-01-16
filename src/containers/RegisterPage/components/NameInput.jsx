import {useState} from "react";
import UserService from "../../../services/UserService";
import css from "../RegisterPage.module.css";

function NameInput(props) {
    const [isHidden, setIsHidden] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');
    const [nameError, setNameError] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);


    const nameValidation = (e) => {
        let inputNameValue = e.target.value;

        if (inputNameValue === '') {
            setNameError('Name should not be empty');
            setDisableBtn(true);
        } else if (inputNameValue.length > 15) {
            setNameError('Name should not contain more than 15 characters');
            setDisableBtn(true);
        } else if (!(inputNameValue.match(/^[a-zA-Z]+$/))) {
            setNameError('Name should contain only letters');
            setDisableBtn(true);
        } else {
            setNameInputValue(inputNameValue);
            setNameError('');
            setDisableBtn(false);
        }
    }

    const saveName = () => {
        props.setName(nameInputValue);
        UserService.setUserName(nameInputValue);
        setIsHidden(true);
    };

    return (
        <div className={`${css.registerForm} ${isHidden ? `${css.hidden}` : ''} name-input`}>
            <h1>Let's start</h1>

            <div className="input-wrapper">
                <label htmlFor="">
                    Name:
                    <input
                        type="text"
                        placeholder="Enter your name or nick"
                        onChange={nameValidation}
                    />
                </label>
                <div className={css.error}>{nameError}</div>
            </div>

            <button
                onClick={saveName}
                className={`${disableBtn ? `${css.disabled}` : ''} btn`}
            >
                Continue
            </button>
        </div>
    );
}

export default NameInput;
