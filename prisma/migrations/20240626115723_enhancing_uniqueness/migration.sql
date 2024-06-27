/*
  Warnings:

  - A unique constraint covering the columns `[productThumbnail,productTitle]` on the table `products_tb` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "products_tb_productThumbnail_productTitle_key" ON "products_tb"("productThumbnail", "productTitle");
