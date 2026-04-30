import DealsModel from "../models/Deals.models.js";
const cachedDeals = {};
let cacheTime = null;
const CACHE_DURATION = 60 * 60 * 24 * 1000;

const sendAllDeals = async (req, res) => {
    try {
        if (cachedDeals.deals && Date.now() - cacheTime < CACHE_DURATION) {
            return res.send({
                success: true,
                message: "Find From Cache",
                data: cachedDeals.deals,
            });
        }

        const deals = await DealsModel.find({}).sort({ createdAt: -1 });
        if (deals) {
            cachedDeals.deals = deals;
            cacheTime = Date.now();
            return res.send({
                success: true,
                message: "Find From DB",
                data: deals,
            });
        } else {
            return res.send({
                success: false,
                message: "Error in fetching data",
            });
        }
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const createDeal = async (req, res) => {
    try {
        const { title, description, image, price, validUntile, isActive } =
            req.body;
        if (
            !title ||
            !description ||
            !image ||
            !price ||
            !validUntile ||
            !isActive
        ) {
            return res.send({
                success: false,
                message: "Please provide all fields",
            });
        }
        const deal = await DealsModel.create({
            title,
            description,
            image,
            price,
            validUntile,
            isActive,
        });
        if (!deal) {
            return res.send({
                success: false,
                message: "Error in creating deal",
            });
        }
        cachedDeals.deals = {};
        cacheTime = null;
        return res.send({
            success: true,
            message: "Deal Created Successfully",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const updateDealStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;
        const deal = await DealsModel.findOneAndUpdate(
            { _id: id },
            { isActive },
            {
                returnDocument: "after",
            },
        );
        if (!deal) {
            return res.send({
                success: false,
                message: "Error in updating deal",
            });
        }
        cachedDeals.deals = {};
        cacheTime = null;
        return res.send({
            success: true,
            message: "Deal Status Updated Successfully",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const deleteDeal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await DealsModel.findOneAndDelete({ _id: id });
        if (!deleted) {
            return res.send({
                success: false,
                message: "Error in deleting deal",
            });
        }
        cachedDeals.deals = {};
        cacheTime = null;
        return res.send({
            success: true,
            message: "Deal Deleted Successfully",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

const updateWholeDeal = async (req, res) => {
    try {
        const { title, description, image, price, validUntile, isActive } =
            req.body;
        const { id } = req.params;
        if (!id) {
            return res.send({
                success: false,
                message: "Please provide id",
            });
        }
        if (
            !title ||
            !description ||
            !image ||
            !price ||
            !validUntile ||
            !isActive
        ) {
            return res.send({
                success: false,
                message: "Please provide all fields",
            });
        }

        const deal = await DealsModel.findOneAndUpdate({ _id: id }, {
            title,
            description,
            image,
            price,
            validUntile,
            isActive,
        }, {
            returnDocument: "after",
        },)

    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};
export { sendAllDeals, createDeal, updateDealStatus, deleteDeal,updateWholeDeal };
