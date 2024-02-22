import {toDosService} from "../../services/ToDosService";
import {useEffect, useState} from "react";
import {Todo} from "./Todo";

const ToDos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
    toDosService.getAll().then(({data}) => setTodos(data))
    }, []);
    return (
        <div>
            {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {ToDos};