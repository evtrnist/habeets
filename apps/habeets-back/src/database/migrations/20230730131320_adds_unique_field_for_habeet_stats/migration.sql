/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `HabeetStat` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "HabeetStat" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "HabeetStat_id_key" ON "HabeetStat"("id");
