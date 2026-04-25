import ProductModel from "../models/Product.models.js";
const cachedData = {};
let cacheTime = null;
const CACHE_DURATION = 60 * 60 * 24 * 1000;

const SendAllProduct = async (req, res) => {
  try {
    if (cachedData.products && Date.now() - cacheTime < CACHE_DURATION) {
      return res.send({
        success: true,
        message: "Find From Cache",
        data: cachedData.products,
      });
    }
    const ProductData = await ProductModel.find();
    if (!ProductData.length) {
      return res.send({
        success: false,
        message: "error in fetching data",
      });
    }
    cachedData.products = ProductData;
    cacheTime = Date.now();
    return res.send({
      success: true,
      message: "Find From DB",
      data: ProductData,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "Something Wents Wrong..",
    });
  }
};

const CreateNewProduct = async (req, res) => {
  const { name, desc, category, prices } = req.body;

  try {
    return res.send({
      success: true,
      message: "Created Successfully",
      data: {
        name,
        desc,
        category,
      },
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "Something worng on server",
    });
  }
};

export { SendAllProduct, CreateNewProduct };
