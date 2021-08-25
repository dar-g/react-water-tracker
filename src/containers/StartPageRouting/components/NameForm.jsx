import {Link} from "react-router-dom";
import {useRef} from "react";

function NameForm(props) {
    const onClickHandler = (event) => {
        props.setName(saveName);
    };

    const inputNameRef = useRef();

    const saveName = () => {
        const nameFromInput = inputNameRef.current.value;

        if (nameFromInput !== null || nameFromInput !== '') {
            console.log(typeof nameFromInput);
            localStorage.setItem('user', nameFromInput);
        } else {
            console.log(typeof nameFromInput);
            alert('Enter your name to continue');
        }
    }

    return (
        <div className="name-form">
            <p>Let's start</p>

            <div className="form-wrapper">
                <label htmlFor="">
                    Name:
                    <input type="text" ref={inputNameRef} />
                </label>
                <div className="error">Error</div>
                <input type="button" onClick={saveName} value="Save" />
            </div>

            <Link to="/register/age" onClick={onClickHandler}>Continue</Link>
        </div>
    );
}

export default NameForm;
