import React from 'react';

const TextField = ({htmlFor, inputRequest, type, errorMessage}) => {
    return (
        <>
            <label htmlFor={htmlFor}>
                {inputRequest}
                <input
                    type={type}
                />
                {errorMessage}
            </label>
        </>
    );
};

export default TextField;