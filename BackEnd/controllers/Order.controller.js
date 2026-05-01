import orderModel from "../models/Order.models.js";
import userModel from "../models/User.models.js";

const SendAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().sort({ createdAt: -1 }).populate({
            path: "orderBy orderAssignTo",
            select: "-password",
        });;
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
        const {
            items,
            paymentMethod,
            deliveryAddress,
            contactNumber,
            totalPrice,
            orderStreet,
            orderCity,
        } = req.body;
        if (
            !items ||
            !paymentMethod ||
            !deliveryAddress ||
            !contactNumber ||
            !totalPrice
        ) {
            return res.send({
                success: false,
                message: "Please provide all fields",
            });
        }
        const userId = req.user?._id;
        if (!userId) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }

        const order = await orderModel.create({
            orderBy: userId,
            items,
            paymentMethod,
            deliveryAddress,
            street: orderStreet,
            city: orderCity,
            contactNumber,
            totalPrice,
        });
        if (!order) {
            return res.send({
                success: false,
                message: "Error in creating order",
            });
        }

        const user = await userModel.findOneAndUpdate(
            {
                _id: userId,
            },
            {
                phone: contactNumber,
                address: deliveryAddress,
            },
            {
                new: true,
            },
        );
        return res.send({
            success: true,
            message: "Order Created Successfully",
            data: order,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const MyOrders = async (req, res) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }

        const allOrders = await orderModel
            .find({ orderBy: userId })
            .sort({ createdAt: -1 });
        if (!allOrders) {
            return res.send({
                success: false,
                message: "Error in fetching data",
            });
        }

        return res.send({
            success: true,
            message: "Find From DB",
            data: allOrders,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const CancelOrder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.send({
                success: false,
                message: "Please provide id",
            });
        }
        const cenceledOrder = await orderModel.findOneAndUpdate(
            { _id: id },
            {
                orderStatus: "cancelled",
            },
            {
                new: true,
            },
        );
        if (!cenceledOrder) {
            return res.send({
                success: false,
                message: "Error in cenceling order",
            });
        }
        return res.send({
            success: true,
            message: "Order cencel successfully",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

// admin contoller to update payment and order status
const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { orderStatus } = req.body;
        if (!id) {
            return res.send({
                success: false,
                message: "Please provide id",
            });
        }

        const updateOrder = await orderModel.findOneAndUpdate(
            {
                _id: id,
            },
            {
                orderStatus,
            },
            {
                new: true,
            },
        );
        if (!updateOrder) {
            return res.send({
                success: false,
                message: "Error in updating order",
            });
        }

        // here we will inform user about his order later
        return res.send({
            success: true,
            message: "Order Updated Successfully",
            data: updateOrder,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const updateOrderPaymentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { paymentStatus } = req.body;
        if (!id) {
            return res.send({
                success: false,
                message: "Please provide id",
            });
        }

        const updateOrder = await orderModel.findOneAndUpdate(
            {
                _id: id,
            },
            {
                paymentStatus,
            },
            {
                new: true,
            },
        );

        if (!updateOrder) {
            return res.send({
                success: false,
                message: "Error in updating order",
            });
        }

        return res.send({
            success: true,
            message: "Order Updated Successfully",
            data: updateOrder,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const AssignRiderToOrder = async (req, res) => {
    const { id } = req.params;
    const { riderId } = req.body;
    if (!id || !riderId) {
        return res.send({
            success: false,
            message: "Please provide all fields",
        });
    }

    const order = await orderModel.findOneAndUpdate(
        { _id: id },
        {
            orderAssignTo: riderId,
        },
        {
            new: true,
        },
    );
    if (!order) {
        return res.send({
            success: false,
            message: "Error in updating order",
        });
    }
    return res.send({
        success: true,
        message: "Order Updated Successfully",
        data: order,
    });
};

export {
    SendAllOrders,
    createOrder,
    MyOrders,
    CancelOrder,
    updateOrderStatus,
    updateOrderPaymentStatus,
    AssignRiderToOrder,
};
