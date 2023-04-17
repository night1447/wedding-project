-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isParent" TEXT NOT NULL DEFAULT 'false',
ADD COLUMN     "sex" TEXT NOT NULL DEFAULT 'M';
