import ProductModel from "../models/Product.models.js";
import cloudinary from "../configs/Cloudinary.js";
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
  if (!name || !desc || !category || !prices) {
    return res.send({
      success: false,
      message: "Please provide all fields",
    });
  }
  const data = await req.file();
  if (!data) {
    return res.send({
      success: false,
      message: "No file uploaded",
    });
  }
  const buffer = await data.toBuffer();

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "uploads" }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
      .end(buffer);
  });
  // uploadResult.secure_url
  // the rest program will be written later
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

const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send({
        success: false,
        message: "Please provide id"
      })
    }
    const delPro = await ProductModel.findOneAndDelete({ _id: id });
    if (!delPro) {
      return res.send({
        success: false,
        message: "Error While Deleting.."
      })
    }
    cachedData.products = {};
    cacheTime = null;
    return res.send({
      success: true,
      message: "Successfully deleted"
    })
  } catch (error) {
    return res.send({
      success: false,
      message: error.message
    })
  }
}

const UpdatePrductStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    console.log(id, status)
    if (!id || !status) {
      return res.send({
        success: false,
        message: "Please provide all fields"
      })
    }
    const Update = await ProductModel.findOneAndUpdate({ _id: id }, {
      stockStatus: status
    }, {
      new: true
    })
    if (!Update) {
      return res.send({
        success: false,
        message: "Error While Updating"
      })
    }

    cachedData.products = {};
    cacheTime = null;
    return res.send({
      success: true,
      message: "Successfully Updated"
    })
  } catch (error) {
    return res.send({
      success: false,
      message: error.message
    })
  }
}

export { SendAllProduct, CreateNewProduct, DeleteProduct, UpdatePrductStatus };
