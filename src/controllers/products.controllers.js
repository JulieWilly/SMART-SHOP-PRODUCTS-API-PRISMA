export const getAllProducts = async (req, res) => {
  // const allProducts = await prisma.
  try {
    const getAllProducts = await prisma.products.findMany({
      select: {
        id: true,
        productThumbnail: true,
        productTitle: true,
        productDesc: true,
        productCost: true,
        onOffer: true,
      },
    });
    res.status(200).json({ success: true, data: getAllProducts });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
}

export const GetSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const getProduct = await prisma.products.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        productThumbnail: true,
        productTitle: true,
        productDesc: true,
        productCost: true,
        onOffer: true,
      },
    });

    if (getProduct == null) {
      res.status(500).json({ success: false, message: "Product not found" });
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: " User found successfully.",
          data: getProduct,
        });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
}

export const createProduct = async (req, res) => {
  try {
    // get items
    const {
      productThumbnail,
      productTitle,
      productDesc,
      productCost,
      onOffer,
    } = req.body;

    if (!productThumbnail || !productTitle || !productDesc || !productCost || !onOffer){
        res.send({message: 'Please enter all the required fields.'})
    }

    // if(typeof(onOffer) !== Boolean) {
    //     res.send({message: "Please enter a boolean value."})
    //     onOffer
    // }
    const createProduct = await prisma.products.create({
      data: {
        productThumbnail,
        productTitle,
        productDesc,
        productCost,
        onOffer,
      },
    });

    res.json(createProduct);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
}

export const updateSingleProduct = async (req, res) => {
  try {
    const productDetails = req.body;
    const productsFields = [
      "productThumbnail",
      "productTitle",
      "productDesc",
      "productCost",
      "onOffer",
    ];

    const { id } = req.params;
    let updates = {};

    for (let product in productDetails) {
      if (productsFields.includes(product)) {
        updates[product] = productDetails[product];
      }
    }

    const updateProducts = await prisma.products.update({
      where: { id: id },
      data: updates,
    });

    res.json(updateProducts);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
}


export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = await prisma.products.delete({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json({
        success: true,
        message: "User deleted succesfully.",
        data: deleteProduct,
      });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
}