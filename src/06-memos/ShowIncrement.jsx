import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me volvi a dibujar :c');

    return (
        <button
            className="btn btn-primary"
            onClick={() => increment(6)}
        >Increment</button>
    )
});
