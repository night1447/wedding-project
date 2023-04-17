import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {Users} from "@/models/models";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Users>,
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
            })
            answer.then(item => console.log(item, "--Subscriber"))
        }
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }

}