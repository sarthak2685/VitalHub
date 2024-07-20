import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";

export const patientRegister = catchAsyncError(async (req, res, next) => {
    const { firstName, lastName, email, phone, nic, dob, gender, password, role } = req.body;

    if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role) {
        const errorMessage = 'Please fill all fields';
        console.error('Error:', errorMessage);

        return next(new ErrorHandler(errorMessage, 400));
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
        return next(new ErrorHandler('User already registered', 400));
    }

    const newUser = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role,
    });
    generateToken(newUser, "User registered", 200, res);
});

export const login = catchAsyncError(async(req, res, next) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return next(new ErrorHandler("Please provide email, password, and role", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }

    if (role !== user.role) {
        return next(new ErrorHandler("User with this role not found", 400));
    }

    generateToken(user, "User Login Successfully!", 201, res);
});
 export const addNewAdmin = catchAsyncError(async(req, res, next)=>{
    const{
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role,
        
    } = req.body;
    if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role){
        return next(new ErrorHandler("please fill full form!",400));
    } 
    const isRegistered = await User.findOne({email});
    if(!isRegistered){
        return next(new ErrorHandler(`${isRegistered.role}Admin with This Email already exists!`,400)); 
    }
    const admin = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role
    });
    res.status(200).json({
        success: true,
        message: "new Admin registered!"
    })
 });

 export const getAllDoctors = catchAsyncError(async(req,res,next)=>{
    const doctors = await User.find({role: "Doctor"});
    res.status(200).json({
        success: true,
        doctors,
    })
 });

 export const getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user = req.user;
    res.status(200).json({
        success: true,
        user,
    })
 })

 export const logoutAdmin = catchAsyncError(async(req, res, next)=>{
    res.status(200).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Admin Logged Out Successfully!",
    });
 });

 export const logoutPatient = catchAsyncError(async(req, res, next)=>{
    res.status(200).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    .json({
        success: true,
        message: "Patient Logged Out Successfully!",
    });
 });

 export const addNewDoctor = catchAsyncError(async(req, res, next)=>{
    if(!req.files || Object.keys(req.files).length===0){
        return next(new ErrorHandler("Doctor Avatar Required!", 400));
    }
    const {docAvatar} = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if(!allowedFormats.includes(docAvatar.mimetype)){
        return next(new ErrorHandler("File Format Not Supported!", 400));
    }
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        doctorDepartment
    } = req.body;
    if( !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic ||
        !doctorDepartment)
        {
            return next(new ErrorHandler("please provide full details", 400));
        }

        const isRegistered = await user.findOne({email});
        if(isRegistered){
            return next(new ErrorHandler(`${isRegistered.role} already registered with this email`, 400));

        }

        const cloudinaryResponse = await cloudinary.uploader.upload(
            docAvatar.tempFilePath
        );
        if(!cloudinaryResponse || cloudinaryResponse.error){
            console.error("cloudinary error:", cloudinaryResponse.error || "unknown cloudinary error");
        }

        const doctor = await user.create({
            firstName,
            lastName,
            email,
            phone,
            password,
            gender,
            dob,
            nic,
            doctorDepartment,
            role: "Doctor",
            docAvatar:{
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
            },
        });

        res.status(200).json({
            success: true,
            message: "New Doctor Registerd!",
            doctor
        })
 });