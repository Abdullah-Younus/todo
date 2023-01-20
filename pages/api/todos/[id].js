import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    console.log('req.query: ', req.query.id);
    // const { id } = req.query;
    // get id from req.query
    const {id} = req.query;
    if (req.method === "DELETE") {
        await prisma.todo.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({ message: "Todo deleted" });
    }
}
