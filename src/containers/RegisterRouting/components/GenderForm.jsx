import {Link} from 'react-router-dom';
import UserService from '../../../services/UserService';

function GenderForm(props) {
    const onSelectChange = (event) => {
        props.setGender(event.target.value);
        UserService.setUserGender(event.target.value);
    }

    const onClickHandler = () => {
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

export default GenderForm;
