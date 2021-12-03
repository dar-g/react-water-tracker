import {useRef, useState} from "react";
import UserService from "../../../services/UserService";

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
        <div className={`${isClicked ? 'hidden' : null} name-input register-form`}>
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
