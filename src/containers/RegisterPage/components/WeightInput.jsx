import {useRef, useState} from "react";
import UserService from "../../../services/UserService";
import css from "../RegisterPage.module.css";

function WeightInput(props) {
    const inputWeightRef = useRef();

    const [isClicked, setIsClicked] = useState(false);

    const saveWeight = () => {
        const weightFromInput = inputWeightRef.current.value;
        props.setWeight(weightFromInput);
        UserService.setUserWeight(weightFromInput);
        setIsClicked(true);
    };

    return (
        <div className={`${css.registerForm} ${isClicked ? `${css.hidden}` : ''} weight-input`}>
            <div className="input-wrapper">
                <label htmlFor="">
                    Weight:
                    <input type="number" ref={inputWeightRef} />
                    <span>kg</span>
                </label>
            </div>

            <button
                onClick={saveWeight}
                className="btn"
            >
                Continue
            </button>
        </div>
    );
}

export default WeightInput;
