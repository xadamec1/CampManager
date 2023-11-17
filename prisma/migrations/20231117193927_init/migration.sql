/*
  Warnings:

  - You are about to drop the column `registrationId` on the `Parent` table. All the data in the column will be lost.
  - Added the required column `imagePath` to the `Camp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPublic` to the `Camp` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Parent" ("email", "firstName", "id", "lastName", "phoneNumber") SELECT "email", "firstName", "id", "lastName", "phoneNumber" FROM "Parent";
DROP TABLE "Parent";
ALTER TABLE "new_Parent" RENAME TO "Parent";
CREATE TABLE "new_Camp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "addressID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "organiser" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "neededEquipment" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "isRegistrationOpen" BOOLEAN NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    CONSTRAINT "Camp_addressID_fkey" FOREIGN KEY ("addressID") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Camp" ("addressID", "capacity", "description", "endDate", "id", "isRegistrationOpen", "name", "neededEquipment", "notes", "organiser", "price", "startDate") SELECT "addressID", "capacity", "description", "endDate", "id", "isRegistrationOpen", "name", "neededEquipment", "notes", "organiser", "price", "startDate" FROM "Camp";
DROP TABLE "Camp";
ALTER TABLE "new_Camp" RENAME TO "Camp";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
