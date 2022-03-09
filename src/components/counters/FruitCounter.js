import React from 'react';
import Button from "../buttons/Button";

const FruitCounter = ({sort, className, counter, minusOne, plusOne}) => {


    return (
        <>
            <fieldset>
                <h2 className={className}>
                    {sort}
                    <Button
                        className="amount-button"
                        disabled={counter <= 0}
                        type="button"
                        buttonName="-"
                        clickHandler={minusOne}
                    />
                    <span className="amount"> {counter} </span>
                    <Button
                        className="amount-button"
                        disabled={false}
                        type="button"
                        buttonName="+"
                        clickHandler={plusOne}
                    />
                </h2>
            </fieldset>

        </>
    );
};

export default FruitCounter;