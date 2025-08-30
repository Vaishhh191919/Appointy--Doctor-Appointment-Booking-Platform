import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';

const DoctorsList = () => {
  const { doctors, changeAvailability, getAllDoctors, deleteDoctor, aToken } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) getAllDoctors();
  }, [aToken]);

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium mb-4'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {doctors.map((item) => (
          <div
            key={item._id} // important for React re-render
            className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden relative'
          >
            <img
              className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500'
              src={item.image}
              alt={item.name}
            />
            <div className='p-4'>
              <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              <div className='mt-2 flex items-center gap-2 text-sm'>
                <input
                  type="checkbox"
                  checked={item.available}
                  onChange={() => changeAvailability(item._id)}
                />
                <p>Available</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
                  deleteDoctor(item._id);
                }
              }}
              className='absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700 transition-colors'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
