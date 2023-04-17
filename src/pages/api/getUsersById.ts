import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {Users} from "@/models/models";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Users>,
) {
    const prisma = new PrismaClient()
    try {
        const {id} = req.query;
        if (req.method === "GET") {
            const data = await prisma.user.findMany({
                where: {
                    usersId: id as string,
                },
            });
            const familyStatus = await prisma.users.findUnique({
                where: {
                    id: id as string
                }
            })
            return res.status(200).json({
                people: data,
                isFamily: JSON.parse(familyStatus?.isFamily || ''),
                id: familyStatus?.id || 'Undefined'
            });
        }
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }

}