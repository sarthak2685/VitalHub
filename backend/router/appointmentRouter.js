import express from "express";
import { deleteAppointment, getAllAppointment, PostAppointment, updateAppointmentStatus } from "../controller/appointmentControllrer.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../middlewares/auth.js";

const router = express.Router();


router.post("/post",isPatientAuthenticated ,PostAppointment);
router.post("/getall",isAdminAuthenticated ,getAllAppointment);
router.put("/update/:id",isAdminAuthenticated ,updateAppointmentStatus);
router.delete("/delete/:id",isAdminAuthenticated ,deleteAppointment);



export default router;