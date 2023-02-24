import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {


    const { formState, onInputChange, onReset } = useForm({
        description: ''
    });

    const { description } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length < 1) return;

        const todo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo(todo);
        onReset();
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                className="form-control"
                placeholder="Que hacer despues?"
                value={description}
                name='description'
                onChange={onInputChange} />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Guardar
            </button>
        </form>
    )
}
