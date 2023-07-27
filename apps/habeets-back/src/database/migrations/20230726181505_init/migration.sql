-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SUCCESS', 'FAIL', 'SKIP');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habeet" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Habeet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabeetStat" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "habeetId" INTEGER NOT NULL,

    CONSTRAINT "HabeetStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Habeet" ADD CONSTRAINT "Habeet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabeetStat" ADD CONSTRAINT "HabeetStat_habeetId_fkey" FOREIGN KEY ("habeetId") REFERENCES "Habeet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
