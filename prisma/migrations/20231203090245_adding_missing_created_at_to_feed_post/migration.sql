/*
  Warnings:

  - Added the required column `createdAt` to the `FeedPost` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FeedPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL
);
INSERT INTO "new_FeedPost" ("content", "id", "imagePath", "title") SELECT "content", "id", "imagePath", "title" FROM "FeedPost";
DROP TABLE "FeedPost";
ALTER TABLE "new_FeedPost" RENAME TO "FeedPost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
