import {catchAsyncError} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {Appointment} from "../models/appointmentSchema.js";
import {User} from "../models/userSchema.js";

export const PostAppointment = catchAsyncError(async(req, res, next)=>{
    const { firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor_firstName,
      doctor_lastName,
      hasVisited,
      addres,
       } = req.body;

    if( !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !nic ||
        !dob ||
        !gender ||
        !appointment_date ||
        !department ||
        !doctor_firstName ||
        !doctor_lastName ||
        !hasVisited ||
        !addres){
            return next(new ErrorHandler("please fill full form!", 400));
        }
        const isConflict = await User.find({
            firstName: doctor_firstName,
            lastName: doctor_lastName,
            role: "Doctor",
            doctorDepartment: department
        })
        if(isConflict.length === 0){
            return next(new ErrorHandler("Doctor not found!", 404));
        }
        if(isConflict.length > 1){
            return next(new ErrorHandler("Doctor Conflict! please contact through email orphone!", 404));
        }
        const doctorId = isConflict[0]._id;
        const patientId = req.user._id;
        const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor:{
        firstName:  doctor_firstName,
        lastName: doctor_lastName,
      },
      hasVisited,
      addres,
      doctorId,
      patientId
        })
        res.status(200).json({
            success: true,
            message: "Appointment sent successfully!",
            appointment,
        })
})

export const getAllAppointment = catchAsyncError(async(req,res,next)=>{
    const appointment = await Appointment.find();
    res.status(200).json({
        sucess: true,
        appointment,
    })
})

export const updateAppointmentStatus = catchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    let appointment = await Appointment.findById(id);
    if(!appointment){
        return next(new ErrorHandler("Appointment Not Found", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(200).json({
        success: true,
        message: "Appointment status updated!",
        appointment,
    })
})

export const deleteAppointment = catchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    if(!appointment){
        return next(new ErrorHandler("Appointment Not Found", 404));
    }
    await appointment.deleteOne();
    res.status(200).json({
        success: true,
        message: "Appointment deleted!",
        // appointment,
    })

})