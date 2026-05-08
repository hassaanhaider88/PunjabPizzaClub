/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
import { CgAdd } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BACK_END_API } from "../Constants";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDeal } from "../store/slices/dealSlice";

const SIZE_OPTIONS = ["Small", "Medium", "Large", "Xtra Large", "default"];

const AdminDealUpdate = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.role !== "admin") {
            navigate("/")
        }
    }, [])

    const [imagePreview, setImagePreview] = useState(null);
    const [LoadingImgUplaod, setLoadingImgUplaod] = useState(false);
    const [isUploadNewImage, setIsUploadNewImage] = useState(false);
    const [oldImg, setOldImg] = useState("")
    const [ImgUrl, setUrl] = useState("");
    const [deal, setDeal] = useState({
        title: "",
        description: "",
        file: null,
        preview: null,
        price: "",
        isActive: true,
        activetill: null
    });

    const fetchDealData = async () => {
        try {
            const res = await fetch(`${BACK_END_API}/api/deals/single/${id}`, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            });
            const result = await res.json();
            console.log(result);
            if (result.success) {
                toast.success(result.message);
                setUrl(result.data.image);
                setOldImg(result.data.image);
                setDeal({
                    title: result?.data.title,
                    description: result?.data.description,
                    price: result?.data.price,
                    isActive: result?.data.isActive,
                    activetill: result?.data.activetill
                });
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error(error.message);
            navigate("/");
        }
    };

    useEffect(() => {
        fetchDealData();
    }, []);

    // IMAGE
    const handleImageUpload = async (e, typeField) => {
        const file = e.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        try {
            setLoadingImgUplaod(true);
            const res = await fetch(`${BACK_END_API}/api/products/upload-image`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
                body: formData,
            });
            const result = await res.json();
            if (result.success) {
                toast.success(result.message);

                setUrl(result.url);

            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoadingImgUplaod(false);
        }

        const blob = URL.createObjectURL(file);

        if (typeField === "product") {
            setImagePreview(blob);
            setDeal({ ...deal, file });
        }
    };

    // PRODUCT CHANGE
    const handleProductChange = (e) => {
        setDeal({ ...deal, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!deal.title) {
            alert("Missing fields");
            return;
        }
        try {
            const res = await fetch(`${BACK_END_API}/api/deals/update/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user?.token}`,
                },
                body: JSON.stringify({
                    title: deal.title,
                    description: deal.description,
                    price: deal.price,
                    isActive: deal.isActive,
                    image: isUploadNewImage ? ImgUrl : oldImg,
                    activetill: deal.activetill
                }),
            });
            const result = await res.json();
            if (result.success) {
                toast.success(result.message);
                dispatch(updateDeal({
                    id,
                    title: result.data.title,
                    description: result.data.description,
                    pirce: result.data.price,
                    isActive: result.data.isActive,
                    image: result.data.image
                }))
                navigate("/all-products")
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-5xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {LoadingImgUplaod && <img
                        src="https://i.pinimg.com/originals/72/f0/f8/72f0f872c567972c54917276a48cac12.gif"
                        className="mt-3 w-40 h-40 object-cover rounded"
                    />}
                    {isUploadNewImage && <div>
                        <input
                            type="file"
                            onChange={(e) => handleImageUpload(e, "product")}
                            className="w-full p-2 bg-white/10 rounded"
                        />
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                className="mt-3 w-40 h-40 object-cover rounded"
                            />
                        )}
                    </div>}
                    {
                        isUploadNewImage == false && <div className="w-full flexCenter"><img
                            src={oldImg}
                            className="mt-3 w-40 h-40 object-cover rounded"
                        /></div>
                    }

                    <label
                        class="relative text-[#E7414F] w-fit flex cursor-pointer items-center justify-center gap-[1em]"
                        for="tick"
                    >
                        <input value={isUploadNewImage} onChange={() => setIsUploadNewImage((pre) => !pre)} class="peer appearance-none" id="tick" name="tick" type="checkbox" />
                        <span
                            class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-2 border-[#E7414F]"
                        >
                        </span>
                        <svg
                            viewBox="0 0 69 89"
                            class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                            fill="none"
                            height="89"
                            width="69"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                                stroke-width="6px"
                                stroke="#E7414F"
                                pathLength="100"
                            ></path>
                        </svg>
                        <p class="text-[1em] font-bold [user-select:none]">Uplaod New Image</p>
                    </label>


                    {/* ROWS */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            value={deal.title}
                            name="title"
                            placeholder="Product title"
                            onChange={handleProductChange}
                            className="p-2 bg-white/10 rounded"
                        />
                        <input
                            value={deal.price}
                            name="price"
                            placeholder="Price"
                            onChange={handleProductChange}
                            className="p-2 bg-white/10 rounded"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            value={deal.description}
                            name="description"
                            placeholder="Description"
                            onChange={handleProductChange}
                            className="p-2 bg-white/10  rounded"
                        />
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={deal.isActive}
                                onChange={() => setDeal({ ...deal, isActive: !deal.isActive })}
                            />
                            Active
                        </label>

                    </div>
                  


                    <button disabled={LoadingImgUplaod} type="submit" className="w-fit px-5  py-3 bg-[#CE3B48] rounded-xl relative left-1/2 -translate-x-1/2">
                        Update <Deal></Deal>
                    </button>
                </form>
            </div >
        </div >
    );
};

export default AdminDealUpdate;
