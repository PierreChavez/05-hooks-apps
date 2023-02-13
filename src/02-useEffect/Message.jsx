import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const onMouseEvent = ({x, y}) => {
            const coords = {x, y};
            console.log(coords)
        }

        console.log('Componet mounted');
        window.addEventListener('mousemove', onMouseEvent)

        return () => {
            console.log('Componet Unmounted');
            window.removeEventListener('mousemove', onMouseEvent)

        }
    }, [])

    return (
        <>
            <h1>Usuario ya existe</h1>
        </>
    )
}
