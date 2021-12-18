import {useState} from "react";
import UserService from "../../../services/UserService";
import css from "../RegisterPage.module.css";

// todo: disable button and show error message under input

function NameInput(props) {
    const [isHidden, setIsHidden] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [nameError, setNameError] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);


    const hasName = (e) => {
        let inputNameValue = e.target.value;

        if (inputNameValue === '') {
            setNameError('Name should not be empty');
        } else if (inputNameValue.length > 15) {
            setNameError('Name should not contain more than 15 characters');
        } else if (!(inputNameValue.match(/^[a-zA-Z]+$/))) {
            setNameError('Name should contain only letters');
        } else {
            setNameInput(e.target.value);
            setNameError('');
            setDisableBtn(false);
        }
    }

    const saveName = () => {
        props.setName(nameInput);
        UserService.setUserName(nameInput);
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
                        onChange={hasName}
                    />
                </label>
                <div className="error">{nameError}</div>
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
