import React from 'react'
import Link from 'next/link';
const Card = ({ tododata }) => {
    return tododata.map((tlist) => (
        <div key={tlist.id} className="bg-gray-800 p-4 relative">
            <button className="absolute top-2 right-4">X</button>
            <div className="space-y-2">
                <h1 className="text-2xl">{tlist.todo}</h1>
                <p>{tlist.date}</p>
            </div>
            <div className="mt-4 text-right">
                <Link className='bg-black border rounded-md hover:bg-amber-700 hover:text-slate-200 px-6 py-2 text-bold text-green-400'
                    href={`/todolist/${tlist.id}`}>Detail</Link>
            </div>
        </div>
    ))
}

export default Card