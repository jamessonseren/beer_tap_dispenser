/*
  Warnings:

  - Added the required column `beverage_price` to the `dispensers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dispensers" ADD COLUMN     "beverage_price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "total_amount" SET DEFAULT 0;
