import {useRef, useState} from "react";
import UserService from "../../../services/UserService";

function AgeInput(props) {
    const inputAgeRef = useRef();

    const [isClicked, setIsClicked] = useState(false);

    const saveAge = () => {
        const ageFromInput = inputAgeRef.current.value;
        props.setAge(ageFromInput);
        UserService.setUserAge(ageFromInput);
        setIsClicked(true);
    };

    return (
        <div className={`${isClicked ? 'hidden' : null} age-input register-form`}>
            <p>Welcome {props.getName()}</p>
            <p>Through the next several steps please enter information about you:</p>

            <div className="input-wrapper">
                <label htmlFor="">
                    Age:
                    <input type="number" ref={inputAgeRef} />
                </label>
            </div>

            <button
                onClick={saveAge}
                className="btn"
            >
                Continue
            </button>
        </div>
    );
}

export default AgeInput;
