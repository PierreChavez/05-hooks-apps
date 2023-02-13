import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const  { data, isLoanding, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

    console.log({data, isLoanding, hasError} )

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
        </>
    )
}
