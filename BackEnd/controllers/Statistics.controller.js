import orderModel from "../models/Order.models.js";
import userModel from "../models/User.models.js"
import ProductModel from "../models/Product.models.js"

const sendAllStatistics = async (req, res) => {
    try {
        const getAllUsers = await userModel.find();
        const getAllOrders = await orderModel.find();
        const getAllProductsCount = await ProductModel.countDocuments();
        if (!getAllUsers || !getAllOrders || !getAllProductsCount) {
            return res.send({
                success: false,
                message: "Error in fetching data"
            })
        }

        return res.send({
            success: true,
            message: "Find From DB",
            data: {
                usersCount: getAllUsers,
                ordersCount: getAllOrders,
                productsCount: getAllProductsCount
            }
        })

    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        })
    }
}

export { sendAllStatistics }