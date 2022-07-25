import { useAppDispath } from "../../store/hooks/appHooks"
import { fetchTodoThunkAction } from "../../store/thunk_actions/fetchTodoThunkAction";

export const ButtonComponent:React.FC = () => {

    const dispath = useAppDispath();

    const handleOnClik = () => {
        dispath(fetchTodoThunkAction())
    }

    return (
        <>
            <button onClick={handleOnClik}>
                Click here to fetch data
            </button>
        </>
    )
}