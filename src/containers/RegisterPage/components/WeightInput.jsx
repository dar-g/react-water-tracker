import {useRef, useState} from "react";
import UserService from "../../../services/UserService";

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
        <div className={`${isClicked ? 'hidden' : null} weight-input register-form`}>
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
