import {Link} from "react-router-dom";
import {useRef} from "react";
import UserService from "../../../services/UserService";

//todo: add validation for input fields, disable button

function NameForm(props) {
    const inputNameRef = useRef();

    const onClickHandler = (event) => {
        props.setName(saveName);
    };

   const saveName = () => {
       const nameFromInput = inputNameRef.current.value;
       console.log(typeof nameFromInput, nameFromInput);

       UserService.setUserName(nameFromInput);
   }

    return (
        <div className="name-form">
            <h1>Let's start</h1>

            <div className="form-wrapper">
                <label htmlFor="">
                    Name:
                    <input type="text" ref={inputNameRef} />
                </label>
                <div className="error">Error</div>
            </div>

            <Link to="/register/age" onClick={onClickHandler} className="btn">Continue</Link>
        </div>
    );
}

export default NameForm;
