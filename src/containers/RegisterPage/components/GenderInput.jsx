import {Link} from "react-router-dom";
import UserService from "../../../services/UserService";
import {useState} from "react";
import css from "../RegisterPage.module.css";

function GenderInput(props) {
    const onSelectChange = (event) => {
        props.setGender(event.target.value);
        UserService.setUserGender(event.target.value);
    }

    const [isHidden, setIsHidden] = useState(false);

    const onClickHandler = () => {
        UserService.saveUserSettingsToLS();
        props.setIsUserRegistered(true);
        setIsHidden(true);
    };

    return (
        <div className={`${css.registerForm} ${isHidden ? `${css.hidden}` : ''} gender-input`}>
            <div className="input-wrapper">
                <label>
                    Gender:
                    <select value={props.gender} onChange={onSelectChange}>
                        <option value="not selected">not selected</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
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
