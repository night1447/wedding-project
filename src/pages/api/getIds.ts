// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string[]>
) {
  const prisma = new PrismaClient()
  try {
    if (req.method === "GET") {
      const data = await prisma.users.findMany();
      return res.status(200).json(data.map((item) => item.id));
    }
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }

}
