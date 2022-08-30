/*
  Warnings:

  - You are about to drop the column `pokeId` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `pokemonId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "pokeId",
ADD COLUMN     "pokemonId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "img" TEXT;
