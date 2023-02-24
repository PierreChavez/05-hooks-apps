import { useCallback, useState } from "react";
import { useCounter } from "../hooks"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter2, setCounter] = useState(20);


    const incrementFather2 = useCallback(
        (value) => {

            console.log('se volvio a ejecutar');
            setCounter((c) => c + value);
        },
        [],
    );

    return (
        <>
            <h1>useCallback : {counter2}</h1>
            <hr />

            <ShowIncrement increment={incrementFather2} />

        </>
    )
}
