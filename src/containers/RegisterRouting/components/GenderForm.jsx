import {Link} from "react-router-dom";
import UserService from "../../../services/UserService";

function GenderForm(props) {
    // const inputGenderRef = useRef();

    const onSelectChange = (event) => {
        props.setGender(event.target.value);
    }

    // const saveGender = (event) => {
    //     const genderFromInput = inputGenderRef.current.value;
    //     UserService.setUserGender(selectedOption);
    //     UserService.saveUserSettingsToLS();
    // }

    const onClickHandler = (event) => {
        UserService.setUserGender(onSelectChange);
        UserService.saveUserSettingsToLS();
    };


    return (
        <div className="gender-form">
            <div className="form-wrapper">
                <label>
                    Gender:
                    <select value={props.gender} onChange={onSelectChange}>
                        <option value=""></option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                    {/*<input type="text" ref={inputGenderRef} />*/}
                </label>
            </div>

            <Link to="/main" onClick={onClickHandler} className="btn">Continue</Link>
        </div>
    );
}

export default GenderForm;
