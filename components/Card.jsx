"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Card = ({ tododata }) => {

    const router = useRouter();
    async function delTodo(id) {
        console.log('id :>> ', id);
        const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
        const data = await res.json();
        // const deleteTodo = await res.json();
        console.log(data);
        router.refresh();
    }
    return tododata.map((tlist) => (
        <div key={tlist.id} className="bg-gray-800 p-4 relative">
            <button className="absolute top-2 right-4" onClick={() => delTodo(tlist.id)}>X</button>
            <div className="space-y-2">
                <h1 className="text-2xl">{tlist.todo}</h1>
                <p>{tlist.date}</p>
            </div>
        </div>
    ))
}

export default Card