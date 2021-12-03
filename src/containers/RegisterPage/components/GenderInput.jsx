import UserService from "../../../services/UserService";
import {useState} from "react";
import {Link} from "react-router-dom";

function GenderInput(props) {
    const onSelectChange = (event) => {
        props.setGender(event.target.value);
        UserService.setUserGender(event.target.value);
    }

    const [isClicked, setIsClicked] = useState(false);

    const onClickHandler = () => {
        UserService.saveUserSettingsToLS();
        props.setIsUserRegistered(true);
        setIsClicked(true);
    };

    return (
        <div className={`${isClicked ? 'hidden' : null} gender-input register-form`}>
            <div className="input-wrapper">
                <label>
                    Gender:
                    <select value={props.gender} onChange={onSelectChange}>
                        <option value="not selected">not selected</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                </label>
            </div>

            <Link
                to="/main"
                onClick={onClickHandler}
                className="btn"
            >
                Continue
            </Link>
        </div>
    );
}

export default GenderInput;
