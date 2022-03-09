import React from "react";

function Button({className,buttonName, type, buttonValue, clickHandler, disabled}) {
    return (
        <button
            className={className}
            disabled={disabled}
            type={type}
            name={buttonName}
            value={buttonValue}
            onClick={clickHandler}
        >
            {buttonName}
        </button>
    )
}

export default Button;

