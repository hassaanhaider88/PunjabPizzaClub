import userModel from "../models/User.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SignUpUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return {
        success: false,
        message: "please provide all fields",
      };
    }

    const isExistEmail = await userModel.findOne({ email });
    if (isExistEmail) {
      return {
        success: false,
        message: "User Exist Already",
      };
    }

    const hashpass = await bcrypt.hash(password, 10);
    const c_user = await userModel.create({
      email,
      password: hashpass,
      name,
    });
    if (!c_user) {
      return {
        success: false,
        message: "Something wents wrong....",
      };
    }

    const token = jwt.sign(
      { userEmail: c_user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      },
    );
    return {
      success: true,
      message: "User Sign Up Successfully",
      data: {
        token,
        name: c_user?.name,
        email: c_user?.email,
        isEmailVerified: c_user?.isEmailVerified,
        role: c_user?.role,
        phone: c_user?.phone,
        address: c_user?.phone
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return {
        success: false,
        message: "Please provide all fields",
      };
    }
    const checkUserExist = await userModel.findOne({ email });
    if (!checkUserExist) {
      return {
        success: false,
        message: "Credentials not match",
      };
    }
    const checkPass = await bcrypt.compare(password, checkUserExist?.password);
    if (!checkPass) {
      return {
        success: false,
        message: "Credentials not match",
      };
    }

    const token = jwt.sign(
      { userEmail: checkUserExist.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" },
    );
    return {
      success: true,
      message: "User Login  Successfully",
      data: {
        token,
        name: checkUserExist?.name,
        email: checkUserExist?.email,
        isEmailVerified: checkUserExist?.isEmailVerified,
        role: checkUserExist?.role,
        phone: checkUserExist?.phone,
        address: checkUserExist?.address
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export { SignUpUser, LoginUser };
