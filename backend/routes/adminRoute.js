import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailability } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();
import { deleteDoctor, clearCompletedAppointments } from '../controllers/adminController.js'  

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailability)
adminRouter.get("/dashboard", authAdmin, adminDashboard)
adminRouter.delete("/delete-doctor/:id", authAdmin, deleteDoctor)
adminRouter.delete("/clear-completed", authAdmin, clearCompletedAppointments)

export default adminRouter;