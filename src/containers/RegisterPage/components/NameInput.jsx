import {useRef, useState} from "react";
import UserService from "../../../services/UserService";
import css from "../RegisterPage.module.css";

function NameInput(props) {
    const inputNameRef = useRef();

    const [isClicked, setIsClicked] = useState(false);

    const saveName = () => {
        const nameFromInput = inputNameRef.current.value;
        props.setName(nameFromInput);
        UserService.setUserName(nameFromInput);
        setIsClicked(true);
    };

    return (
        <div className={`${css.registerForm} ${isClicked ? `${css.hidden}` : ''} name-input`}>
            <h1>Let's start</h1>

            <div className="input-wrapper">
                <label htmlFor="">
                    Name:
                    <input type="text" ref={inputNameRef} />
                </label>
                <div className="error">Error</div>
            </div>

            <button
                onClick={saveName}
                className="btn"
            >
                Continue
            </button>
        </div>
    );
}

export default NameInput;
