import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        await prisma.todo.create({
            data
        });
        res.status(200).json({ message: "Todo created" });
    }
    if (req.method === "GET") {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
    }
}

// get all todos




// get all todos


