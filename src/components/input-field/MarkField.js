import React from 'react';

const MarkField = ({htmlFor, type, choiceInput, register, name, onChange}) => {
    return (
        <label htmlFor={htmlFor}>
            <input
                type={type}
                {...register(name, {onChange})}
            />
            {choiceInput}
        </label>

    );
};

export default MarkField;