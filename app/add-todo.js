'use client'

import axios from 'axios';
import router, { useRouter } from 'next/navigation';
import { useState } from 'react';

export async function addTodo(text, refresh) {
    await axios({
        method: 'post',
        url: 'https://todo-server-smoky.vercel.app/todos',
        data: {
            text: text,
            isCompleted: true
        },
        withCredentials: true
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error('Error:', error);
    });
    refresh();
}

export default function AddTodo() {
    const router = useRouter();
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => addTodo(text, router.refresh)}>Add</button>
        </div>
    )
}

