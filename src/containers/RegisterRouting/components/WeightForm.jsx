import {Link} from 'react-router-dom';
import {useRef} from 'react';
import UserService from '../../../services/UserService';

function WeightForm(props) {
    const inputWeightRef = useRef();

    const saveWeight = () => {
        const weightFromInput = inputWeightRef.current.value;
        props.setWeight(weightFromInput);
        UserService.setUserWeight(weightFromInput);
    };

    return (
        <div className="weight-form">
            <div className="form-wrapper">
                <label htmlFor="">
                    Weight:
                    <input type="number" ref={inputWeightRef} />
                    <span>kg</span>
                </label>
            </div>

            <Link
                to="/register/gender"
                onClick={saveWeight}
                className="btn"
            >
                Continue
            </Link>
        </div>
    );
}

export default WeightForm;
