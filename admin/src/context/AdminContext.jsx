import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [appointments, setAppointments] = useState([])
    const [doctors, setDoctors] = useState([])
    const [dashData, setDashData] = useState(false)

    // Getting all Doctors data from Database using API
    const getAllDoctors = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/all-doctors', { headers: { atoken: aToken } })
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (id) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', 
                { docId: id }, 
                { headers: { atoken: aToken } }
            );
            
            if (data.success) {
                getAllDoctors();
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to update availability');
        }
    };

    const deleteDoctor = async (id) => {
        try {
            const { data } = await axios.delete(backendUrl + `/api/admin/delete-doctor/${id}`, {
                headers: { atoken: aToken }
            });
            
            if (data.success) {
                getAllDoctors();
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to delete doctor');
        }
    };

    // Getting all appointment data from Database using API
    const getAllAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/appointments', { headers: { atoken: aToken } })
            if (data.success) {
                setAppointments(data.appointments.reverse())
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }
    const clearCompletedAppointments = async () => {
  try {
    const { data } = await axios.delete(backendUrl + '/api/admin/clear-completed', {
      headers: { atoken: aToken }
    });
    
    if (data.success) {
      getAllAppointments();
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error('Failed to clear appointments');
  }
};
    // Function to cancel appointment using API
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { atoken: aToken } })

            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    // Getting Admin Dashboard data from Database using API
    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { atoken: aToken } })

            if (data.success) {
                setDashData(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        doctors,
        getAllDoctors,
        changeAvailability,
        appointments,
        getAllAppointments,
        getDashData,
        cancelAppointment,
        deleteDoctor,
        dashData,
        clearCompletedAppointments
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider