-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_usersId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "usersId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
