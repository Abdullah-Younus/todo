import prisma from "@/lib/prisma";

async function getTodo(id) {
    const data = await prisma.todo.findUnique({ where: { id: +id } });
    return data;
}

export default async function DynamicPage({ params }) {
    const { id } = params;
    const tlist = await getTodo(id);
    return (
        <div className="text-slate-100 p-4 md:w-[50vw] lg:w-[30vw]">
            <div key={tlist.id} className="bg-gray-800 p-4">
                <div className="space-y-2">
                    <h1 className="text-2xl">{tlist.todo}</h1>
                    <p>Date :{tlist.date}</p>
                    <h3 className="text-lg">Time :{tlist.time}</h3>
                </div>
            </div>
        </div>
    )
}