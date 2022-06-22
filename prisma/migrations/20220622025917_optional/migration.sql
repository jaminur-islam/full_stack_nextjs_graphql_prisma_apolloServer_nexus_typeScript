-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "imagesUrl" TEXT,
    "category" TEXT,
    "userId" TEXT,
    CONSTRAINT "link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_link" ("category", "createAt", "description", "id", "imagesUrl", "title", "updatedAt", "url", "userId") SELECT "category", "createAt", "description", "id", "imagesUrl", "title", "updatedAt", "url", "userId" FROM "link";
DROP TABLE "link";
ALTER TABLE "new_link" RENAME TO "link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
