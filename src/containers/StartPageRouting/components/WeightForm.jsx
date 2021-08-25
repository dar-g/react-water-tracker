import {Link} from "react-router-dom";
import {useRef} from "react";

function WeightForm(props) {
    const onClickHandler = (event) => {
        props.setWeight(saveWeight);
    };

    const inputWeightRef = useRef();

    const saveWeight = () => {
        const weightFromInput = inputWeightRef.current.value;
        localStorage.setItem('user-weight', weightFromInput);
        return weightFromInput;
    }

    return (
        <div className="weight-form">
            <div className="form-wrapper">
                <label htmlFor="">
                    Weight:
                    <input type="number" ref={inputWeightRef} />
                    <span>kg</span>
                </label>
                <input type="button" onClick={saveWeight} value="Save" />
            </div>

            <Link to="/register/sex" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

export default WeightForm;
