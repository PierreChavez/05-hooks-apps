import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustonHook = () => {

    const {counter} =  useCounter();
    return (
        <>
            <h1>counter with Hook1: { counter }</h1>
            <hr />
            <button className='btn btn-primary'>+1</button>
            <button className='btn btn-primary'>+Reset</button>
            <button className='btn btn-primary'>-1</button>

        </>
    )
}
