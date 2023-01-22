import prisma from "@/lib/prisma";
import Link from "next/link";
import Card from "@/components/Card";
async function getTodoLists() {
    const data = await prisma.todo.findMany({
        select: {
            id: true,
            todo: true,
            date: true,
        }
    })
    return data;
}

export default async function TodoLists() {

    const tododata = await getTodoLists();

    return (
        <div className="p-4 text-slate-100 space-y-4">
            <h1 className="text-xl">Todo Lists</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
               <Card tododata={tododata}/>
            </div>
        </div>
    )
}
{/* <div className="bg-gray-800 p-4 relative">
<button className="absolute top-2 right-4">X</button>
<div className="space-y-2">
    <h1 className="text-2xl">Todo</h1>
    <p>20-11-2010</p>
</div>
<div className="mt-4">
    <button className='bg-black border rounded-md hover:bg-amber-700 hover:text-slate-200 px-6 py-2 text-bold text-green-400' type="submit">Add</button>
</div>
</div> */}