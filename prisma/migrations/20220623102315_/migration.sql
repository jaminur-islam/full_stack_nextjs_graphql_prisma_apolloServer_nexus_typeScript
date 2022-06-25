/*
  Warnings:

  - You are about to drop the column `category` on the `link` table. All the data in the column will be lost.
  - You are about to drop the column `imagesUrl` on the `link` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `link` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_email_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_link" ("createAt", "description", "id", "title", "updatedAt", "userId") SELECT "createAt", "description", "id", "title", "updatedAt", "userId" FROM "link";
DROP TABLE "link";
ALTER TABLE "new_link" RENAME TO "link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
