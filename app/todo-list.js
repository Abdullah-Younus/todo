
import Todo from './todo';
import axios from 'axios';
export async function getTodos() {
    // axios get request with async await
    const todos = await axios.get('https://todo-server-smoky.vercel.app/todos', {
        withCredentials: true
    }).then((response) => {
        return response.data;
    }).catch((err) => {
        console.log('Error', err);
    })

    return todos;
}



export default async function TodoList() {
    // without destructuring todos
    const { todos } = await getTodos();
    console.log('Check todos without destructing :', todos);

    return (
        <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>

                {(todos) ? todos.map((e) => {
                    return (
                        <div key={e._id}>
                            <li style={{ padding: "5px 0" }} >
                                <Todo todo={e} />
                            </li>
                        </div>
                    )
                }
                ) : (<div>Loading...</div>)}
            </ul>
        </div>
    )
}

