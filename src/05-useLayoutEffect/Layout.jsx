import { useCounter , useFetch } from '../hooks';
import { Quote, LoadingQuote } from '../03-example';
 
export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoanding, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes#${counter}`);

    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoanding 
                ? <LoadingQuote /> 
                : <Quote author={author} quote={quote} />
            }

            <button 
            className='btn btn-primary'
            disabled={isLoanding} 
            onClick={() => increment()}>
                Next quote
            </button>


        </>
    )
}


