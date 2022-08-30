/*
  Warnings:

  - A unique constraint covering the columns `[pokemonId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_pokemonId_key" ON "Pokemon"("pokemonId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
