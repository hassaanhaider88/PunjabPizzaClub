import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginAndSignUp = () => {
  const [state, setState] = useState("login");
  const [isShowPass, setIsShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      toast.error("Password Must be greater than 8 characters");
    }
    console.log(formData);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-red-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
            <CgProfile size={27} color="gray" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border-none outline-none "
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-red-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
          <HiOutlineMail size={27} color="gray" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none "
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
          <MdPassword size={27} color="gray" />
          <input
            type={isShowPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isShowPass ? (
            <FaRegEyeSlash
              onClick={() => setIsShowPass(!isShowPass)}
              size={27}
              color="gray"
              className="mr-3"
            />
          ) : (
            <FaEye
              onClick={() => setIsShowPass(!isShowPass)}
              size={27}
              color="gray"
              className="mr-3"
            />
          )}
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-[#ff4757] hover:bg-[#ff4756a8] transition "
        >
          {state === "login" ? "Login" : "Create Acount"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-red-400 hover:underline ml-1">click here</span>
        </p>
      </form>
      {/* Soft Backdrop*/}
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-red-800/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-red-700/35 to-transparent rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default LoginAndSignUp;
