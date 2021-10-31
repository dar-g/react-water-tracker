import {Link} from "react-router-dom";
import {useRef} from "react";
import UserService from "../../../services/UserService";

function AgeInput(props) {
    const inputAgeRef = useRef();

    const saveAge = () => {
        const ageFromInput = inputAgeRef.current.value;
        props.setAge(ageFromInput);
        UserService.setUserAge(ageFromInput);
    };

    return (
        <div className="age-input register-form">
            <p>Welcome {props.getName()}</p>
            <p>Through the next several steps please enter information about you:</p>

            <div className="input-wrapper">
                <label htmlFor="">
                    Age:
                    <input type="number" ref={inputAgeRef} />
                </label>
            </div>

            <Link
                to="/register/weight"
                onClick={saveAge}
                className="btn"
            >
                Continue
            </Link>
        </div>
    );
}

export default AgeInput;
