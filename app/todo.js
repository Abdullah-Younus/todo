'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
// function update 

export async function update(_id, isCompleted, refresh) {
    const data = {
        isCompleted: isCompleted
    }
    await fetch(`https://todo-server-smoky.vercel.app/todos/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(error => {
        console.error('Error:', error);
    });
    refresh();
}

export async function todoDelete(_id, refresh) {
    // console.log('Delete', _id);
    // axios delete request
   
    await fetch(`https://todo-server-smoky.vercel.app/todos/${_id}`, {
        method: 'DELETE'
    }).then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(error => {
        console.error('Error:', error);
    });
    refresh();
}
export default function Todo({ todo }) {
    console.log('Check todo', todo);
    const router = useRouter();
    return (
        <>
            <input type="checkbox" onChange={(e) => update(todo._id, e.target.checked, router.refresh)} />
            {todo.text}
            <button onClick={() => todoDelete(todo._id, router.refresh)}>Delete</button>
        </>

    )
}