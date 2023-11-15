-- CreateTable
CREATE TABLE "Camp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "addressID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "organiser" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "neededEquipment" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "isRegistrationOpen" BOOLEAN NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    CONSTRAINT "Camp_addressID_fkey" FOREIGN KEY ("addressID") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "campId" INTEGER NOT NULL,
    "childId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "paid" BOOLEAN NOT NULL,
    CONSTRAINT "Registration_campId_fkey" FOREIGN KEY ("campId") REFERENCES "Camp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registration_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Children" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registration_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Children" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adressId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,
    "diet" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "insuranceCompany" INTEGER NOT NULL,
    CONSTRAINT "Children_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "streetNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "notes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
