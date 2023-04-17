import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from "@prisma/client";
import {Subscriber} from "@/models/models";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Subscriber[]>
) {
    const prisma = new PrismaClient()
    try {
        if (req.method === "GET") {
            const data = await prisma.subscriber.findMany();
            return res.status(200).json(data.map(item => ({
                name: item.name,
                alcohol: item.alcohol,
                arrivement: item.arrivement,
                id: item.id
            })));
        }
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }

}
