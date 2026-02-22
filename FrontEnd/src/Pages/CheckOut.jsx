import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../Store/cartSlice";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const RESTAURANT_COORDS = {
        lat: 31.8237759104478,
        lng: 72.8014905575502
    };
    const { cartItems } = useSelector((state) => state.cart);

    // Subtotal, VAT, Shipping, Total
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.selectedVariant.price * item.quantity,
        0,
    );
    const shipping = 0;
    const total = subtotal + shipping;

    useEffect(() => {
        if (cartItems.length < 1) {
            navigate("/");
        }
    }, [cartItems, navigate]);


    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans">
                <div className="bg-[#FAF7F2] w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row ">
                    {/* LEFT SECTION: Information Form */}
                    <div className="w-full md:w-1/2 p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8">Checkout</h2>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 mb-1 block">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#B74245] bg-gray-50"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 mb-1 block">
                                        Phone No
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone"
                                        className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#B74245] bg-gray-50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 mb-1 block">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full p-3 border border-gray-200 rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#B74245] bg-gray-50"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 mb-1 block">
                                    Delivery Address
                                </label>
                                {/* yaha pr map lago ga real wala ja pr user ki current positon aur hummre resturant se fasla kina hai wo show hoga inshallah */}
                            </div>





                            <div className="w-full flex justify-center items-center">
                                <button className="BoxColors text-white font-bold py-3 px-5 rounded-full transition-colors mt-4">Proceed</button>
                            </div>
                        </form>
                    </div>


                    <div className="w-full md:w-1/2 bg-[#EBC597] p-8 md:p-12 text-white">
                        <h3 className="text-xl font-bold mb-6">Your Cart</h3>

                        {/* Cart Items List */}
                        <div className="space-y-4  mb-10">
                            {cartItems.length === 0 && (
                                <p className="text-gray-400 text-sm">Your cart is empty</p>
                            )}
                            {cartItems.map((item) => (
                                <div
                                    key={item.id + item.selectedVariant.size}
                                    className="flex flex-wrap md:flex-row flex-col gap-4 items-center justify-between bg-[#ffffffda] text-black p-3 rounded-xl border border-gray-800"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.selectedVariant.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-lg object-cover bg-white p-1"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold">
                                                {item.name} ({item.selectedVariant.size})
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                Rs {item.selectedVariant.price}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 bg-[#b74245] text-white px-2 py-1 rounded-full border border-gray-700 scale-90">
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        decreaseQty({
                                                            id: item.id,
                                                            size: item.selectedVariant.size,
                                                        }),
                                                    )
                                                }
                                                className="p-1 hover:text-blue-400 transition-colors"
                                            >
                                                <AiOutlineMinus size={20} />
                                            </button>
                                            <span className="text-sm font-bold w-4 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        increaseQty({
                                                            id: item.id,
                                                            size: item.selectedVariant.size,
                                                        }),
                                                    )
                                                }
                                                className="p-1 hover:text-blue-400 transition-colors"
                                            >
                                                <AiOutlinePlus size={20} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    removeFromCart({
                                                        id: item.id,
                                                        size: item.selectedVariant.size,
                                                    }),
                                                )
                                            }
                                            className="text-red-500 hover:text-red-400 transition-colors"
                                        >
                                            <AiOutlineClose size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold mb-6">Price Details</h3>

                        {/* Totals Table */}
                        <div className="bg-[#15172b] rounded-xl p-6 border border-gray-800 space-y-4">
                            <div className="flex justify-between items-center text-gray-300">
                                <span>Items</span>
                                <span className="font-bold text-white">Rs {subtotal}</span>
                            </div>

                            <div className="flex justify-between items-center text-gray-300">
                                <span>Delivery Charges</span>
                                <span className="font-bold text-white">
                                    Rs {shipping.toFixed(2)}
                                </span>
                            </div>



                            <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                                <span className="text-lg font-bold">Total</span>
                                <span className="text-lg font-bold">Rs {total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
