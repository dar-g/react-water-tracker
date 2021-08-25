import {Link} from "react-router-dom";
import {useRef} from "react";

function AgeForm(props) {
    const onClickHandler = (event) => {
        props.setAge(saveAge);
    };

    const inputAgeRef = useRef();

    const saveAge = () => {
        const ageFromInput = inputAgeRef.current.value;
        localStorage.setItem('user-age', ageFromInput);
        return ageFromInput;
    }

    return (
        <div className="age-form">
            <p>Welcome {props.getName()}</p>
            <p>Through the next several steps please enter information about you:</p>

            <div className="form-wrapper">
                <label htmlFor="">
                    Age:
                    <input type="number" ref={inputAgeRef} />
                </label>
                <input type="button" onClick={saveAge} value="Save" />
            </div>

            <Link to="/register/weight" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

export default AgeForm;
