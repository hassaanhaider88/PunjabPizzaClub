import orderModel from "../models/Order.models.js";
import userModel from "../models/User.models.js";

const SendAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().sort({ createdAt: -1 });
        if (!orders) {
            return res.send({
                success: false,
                message: "error in fetching data",
            });
        }
        return res.send({
            success: true,
            message: "Find From DB",
            data: orders,
        });

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

// only logged User can order and whol emial is verified
const createOrder = async (req, res) => {
    try {
        const { items, paymentMethod, deliveryAddress, contactNumber, totalPrice, orderStreet, orderCity } = req.body;
        if (!items || !paymentMethod || !deliveryAddress || !contactNumber || !totalPrice) {
            return res.send({
                success: false,
                message: "Please provide all fields"
            })
        }
        const userId = req.user?._id;
        if (!userId) {
            return res.send({
                success: false,
                message: "User not found"
            })
        }
        const order = await orderModel.create({
            orderBy: userId,
            items,
            paymentMethod,
            deliveryAddress,
            street: orderStreet,
            city: orderCity,
            contactNumber,
            totalPrice
        });
        if (!order) {
            return res.send({
                success: false,
                message: "Error in creating order"
            })
        }

        const user = await userModel.findOneAndUpdate({
            _id: userId
        }, {
            phone: contactNumber,
            address: deliveryAddress
        }, {
            new: true
        })
        return res.send({
            success: true,
            message: "Order Created Successfully",
            data: order
        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        })
    }
}


const MyOrders = async (req, res) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            return res.send({
                success: false,
                message: "User not found"
            })
        }

        const allOrders = await orderModel.find({ orderBy: userId }).sort({ createdAt: -1 });
        if (!allOrders) {
            return res.send({
                success: false,
                message: "Error in fetching data"
            })
        }

        return res.send({
            success: true,
            message: "Find From DB",
            data: allOrders
        })

    } catch (error) {
        return res.send({
            success: false,
            message: error.message
        })
    }
}

export { SendAllOrders, createOrder, MyOrders }