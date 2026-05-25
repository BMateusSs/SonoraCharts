-- CreateEnum
CREATE TYPE "ChartStatus" AS ENUM ('SETUP', 'SYNCING', 'ACTIVE', 'ERROR');

-- CreateEnum
CREATE TYPE "ChartType" AS ENUM ('TRACK', 'ALBUM', 'ARTIST');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChartProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chartName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "weekStartDay" INTEGER NOT NULL,
    "status" "ChartStatus" NOT NULL DEFAULT 'SETUP',
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChartProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChartSetting" (
    "id" TEXT NOT NULL,
    "chartId" TEXT NOT NULL,
    "chartType" "ChartType" NOT NULL,
    "maxPositions" INTEGER NOT NULL,
    "maxPoints" INTEGER NOT NULL DEFAULT 100,
    "pointDecay" INTEGER NOT NULL DEFAULT 1,
    "minPoints" INTEGER NOT NULL DEFAULT 1,
    "playsWeight" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "pointsWeight" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "minPlaysToChart" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChartSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CertificationRule" (
    "id" TEXT NOT NULL,
    "chartId" TEXT NOT NULL,
    "chartType" "ChartType" NOT NULL,
    "goldCertification" DOUBLE PRECISION NOT NULL,
    "platinumCertification" DOUBLE PRECISION NOT NULL,
    "diamondCertification" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CertificationRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ChartProfile_slug_key" ON "ChartProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ChartProfile_userId_slug_key" ON "ChartProfile"("userId", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "ChartSetting_chartId_chartType_key" ON "ChartSetting"("chartId", "chartType");

-- CreateIndex
CREATE UNIQUE INDEX "CertificationRule_chartId_chartType_key" ON "CertificationRule"("chartId", "chartType");

-- AddForeignKey
ALTER TABLE "ChartProfile" ADD CONSTRAINT "ChartProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartSetting" ADD CONSTRAINT "ChartSetting_chartId_fkey" FOREIGN KEY ("chartId") REFERENCES "ChartProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificationRule" ADD CONSTRAINT "CertificationRule_chartId_fkey" FOREIGN KEY ("chartId") REFERENCES "ChartProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
