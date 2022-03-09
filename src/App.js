import React from 'react';
import './App.css';
import Button from "./components/buttons/Button";
import FruitCounter from "./components/counters/FruitCounter";
import TextField from "./components/input-field/TextField";
import MarkField from "./components/input-field/MarkField";
import { useForm } from "react-hook-form";

function App() {
    //const [strawberry, setStrawberry] = React.useState(0);
    //const [banana, setBanana] = React.useState(0);
    //const [apple, setApple] = React.useState(0);
    //const [kiwi, setKiwi] = React.useState(0);

    const array = {
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi:0,};

    const [state, setState] = React.useState(array);


    const {register, handleSubmit, formState: {errors}} = useForm(
        // mode: "onChange",
        // defaultValues: {
        //     // firstname: {required: "Deze veld is verplicht!"},
        //     lastname: {required: "Deze veld is verplicht!"},
        //     //age: {min: {value: 18, message: "Minimaal leeftijd is 18 jaar."}},
        //     postcode: {required: "Deze veld is verplicht!"},
        );

    function resetCounter() {
        setState(array);
    }

    function formData(data) {
        console.log(state);
        console.log(data);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <h2>Je mag toch niet naar buiten</h2>

            <FruitCounter
            sort="Aardbeien"
            counter={state.strawberry}
            minusOne={() => setState(state => ({...state, strawberry: state.strawberry -1}))}
            plusOne={() => setState(state => ({...state, strawberry: state.strawberry +1}))}
            />

            <FruitCounter
                sort="Bananen"
                counter={state.banana}
                minusOne={() => setState(state => ({...state, banana: state.banana -1}))}
                plusOne={() => setState(state => ({...state, banana: state.banana +1}))}
            />

            <FruitCounter
                sort="Appels"
                counter={state.apple}
                minusOne={() => setState(state => ({...state, apple: state.apple -1}))}
                plusOne={() => setState(state => ({...state, apple: state.apple +1}))}
            />

            <FruitCounter
                sort="Kiwi's"
                counter={state.kiwi}
                minusOne={() => setState(state => ({...state, kiwi: state.kiwi -1}))}
                plusOne={() => setState(state => ({...state, kiwi: state.kiwi +1}))}
            />

            <Button
            className="reset-button"
            disabled={false}
            type="button"
            buttonName="Reset"
            clickHandler={resetCounter}
            />

            <form onSubmit={handleSubmit(formData)}>

                <TextField
                    htmlFor="firstname-field"
                    inputRequest="Naam"
                    type="text"
                    {...register("name", {required: "Deze veld is verplicht!"})}
                    errorMessage={errors.name && <p>{errors.name.message}</p>}
                />

                <TextField
                    htmlFor="lastname-field"
                    inputRequest="Achternaam"
                    type="text"
                    register={register}
                    name="lastname"
                />

                <TextField
                    htmlFor="age-field"
                    inputRequest="Leeftijd"
                    type="number"
                    {...register("age", {
                        required: "Deze veld is verplicht!",
                        min: {
                            value: 18,
                            message:"Minimaal leeftijd is 18 jaar."
                        }, })}
                    errorMessage={errors.age && <p>{errors.age.message}</p>}
                />

                <TextField
                    htmlFor="postcode-field"
                    inputRequest="Postcode"
                    type="text"
                    register={register}
                    name="postcode"
                />

                <label htmlFor="delivery-selection">Bezorgfrequentie
                <select name="delivery-selection" id="delivery-selection">
                    <option value="every-week">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="every-month">Iedere maand</option>
                </select>
                </label>

                <MarkField
                htmlFor="during-day"
                type="radio"
                choiceInput="Overdag"
                register={register}
                name="during-day"
                onChange={(e) => console.log(e.target.value)}
                />

                <MarkField
                    htmlFor="evening"
                    type="radio"
                    choiceInput="s'Avonds"
                    register={register}
                    name="evening"

                />

                <label htmlFor="comments-field">Opmerkingen
                <textarea
                    {...register("comments")}
                    id="comments"
                    cols="30"
                    rows="10">
                </textarea>
                </label>

                <MarkField
                    htmlFor="conditions-agreement"
                    type="checkbox"
                    choiceInput="Ik ga akkord met de voorwaarden"
                    register={register}
                    name="conditions-agreement"
                />

                <Button
                    className="submit-button"
                    disabled={false}
                    type="submit"
                    buttonName="Versturen"
                />

            </form>

        </>
    );
}

export default App;
