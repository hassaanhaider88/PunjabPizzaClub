import { createSlice } from "@reduxjs/toolkit"


const orderSlice = createSlice({
    name: "order",
    initialState: {},
    reducers: {
        allOrders: (state, action) => {
            state.orders = action.payload.orders
        },
        updateOrderStatus: (state, action) => {
            const { id, paymentStatus, orderStatus } = action.payload;
            const order = state.orders.find((item) => item._id === id);
            if (order) {
                order.paymentStatus = paymentStatus;
                order.orderStatus = orderStatus;
            }
        },
        updateAssingToRider: (state, action) => {
            const { id, riderId } = action.payload;
            console.log(id, riderId)
            const order = state.orders.find((item) => item._id === id);
            if (order) {
                order.orderAssignTo = riderId;
            }
        }
    }
});

export const { allOrders, updateOrderStatus, updateAssingToRider } = orderSlice.actions
export default orderSlice.reducer;