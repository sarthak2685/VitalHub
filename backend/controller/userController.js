import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";

export const patientRegister = catchAsyncError(async (req, res, next) => {
    const { firstName, lastName, email, phone, nic, dob, gender, password,role } = req.body;

if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role) {
    const errorMessage = 'Please fill all fields';
    console.error('Error:', errorMessage);

    //console.error('Additional Details:', { missingFields: { firstName, lastName, email, phone, nic, dob, gender, password } });

    return next(new ErrorHandler(errorMessage, 400));
    //return next(new ErrorHandler('Please fill all fields', 400));
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

    res.status(200).json({
        success: true,
        message: "User registered",
        // data: newUser,
    });
});

export const login = catchAsyncError(async(req,res,next)=>{
    const{email,password,confirmPassword,role}=req.body;
    if(!email  || !password || !confirmPassword || !role){
        return next(new ErrorHandler("please provide valid details",400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("password and confirm password do not match",400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("please provide valid details",400));
    }
})