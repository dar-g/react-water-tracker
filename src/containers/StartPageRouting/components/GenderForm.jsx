import {Link} from "react-router-dom";
import {useRef} from "react";

function GenderForm(props) {
    const onClickHandler = (event) => {
        props.setGender(saveGender);
    };

    const inputGenderRef = useRef();

    const saveGender = () => {
        const genderFromInput = inputGenderRef.current.value;
        localStorage.setItem('user-gender', genderFromInput);
        return genderFromInput;
    }

    return (
        <div className="gender-form">
            <div className="form-wrapper">
                <label htmlFor="">
                    Gender:
                    <input type="text" ref={inputGenderRef} />
                </label>
                <input type="button" onClick={saveGender} value="Save" />
            </div>

            <Link to="/main" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

export default GenderForm;
