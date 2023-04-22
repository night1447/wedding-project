import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {Subscriber} from "@/models/models";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Subscriber | { error: string }>,
) {
    const prisma = new PrismaClient()
    try {
        if (req.method === "POST") {
            const answer = prisma.subscriber.upsert({
                where: {
                    id: req.body.id,
                },
                update: {
                    arrivement: req.body.arrivement,
                    alcohol: req.body.alcohol,
                    name: req.body.name,
                },
                create: {
                    ...req.body,
                    event_id: 1,
                }
            }).catch(() => {
                throw Error()
            })
            answer.then((data) => res.status(200).json({
                name: data.name,
                id: data.id,
                alcohol: data.alcohol,
                arrivement: data.arrivement
            }));
        } else {
            res.status(405).json({error: 'Method Not Allowed'})
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    } finally {
        await prisma.$disconnect();
    }

}