"use client";

import React from 'react'
import Input from '@/components/Input';
import { useRouter } from "next/navigation";

const FormTodo = () => {
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const res = await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                todo: formData.get("todo"),
                date: formData.get("date"),
                time: formData.get("time")
            }),
        });
        const data = await res.json();
        console.log(data);
        router.refresh();
        e.target.reset();
        router.push('/todolist');
    }


    return (
        <div className='grid grid-cols-1 place-items-center'>
            <form onSubmit={handleSubmit} className='bg-gray-800 space-y-4 p-4 w-[80vw] md:w-[40vw] rounded-md shadow-lg'>
                <div className='flex flex-col gap-2'>
                    <label className='text-slate-100'>Todo</label>
                    <Input type="text" name="todo" placeholder="Enter Todo" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-slate-100'>Date</label>
                    <Input type="date" name="date" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-slate-100'>Time</label>
                    <Input type="time" name="time" />
                </div>
                <div className='text-center pt-6'>
                    <button className='bg-black border rounded-md hover:bg-amber-700 hover:text-slate-200 px-6 py-2 text-bold text-green-400' type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default FormTodo