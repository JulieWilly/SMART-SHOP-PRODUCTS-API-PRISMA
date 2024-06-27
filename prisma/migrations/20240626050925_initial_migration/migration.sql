-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "productThumbnail" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" TEXT NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
