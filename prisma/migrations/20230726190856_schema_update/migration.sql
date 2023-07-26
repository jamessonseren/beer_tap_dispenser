/*
  Warnings:

  - Added the required column `total_amount` to the `dispensers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dispensers" ADD COLUMN     "total_amount" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "service_register" (
    "id" TEXT NOT NULL,
    "dispenser_id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "beer_served" DOUBLE PRECISION NOT NULL,
    "amount_charged" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "service_register_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service_register" ADD CONSTRAINT "service_register_dispenser_id_fkey" FOREIGN KEY ("dispenser_id") REFERENCES "dispensers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
