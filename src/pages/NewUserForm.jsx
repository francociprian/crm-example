import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FormNewUser from '../components/FormNewUser'
import { useNavigate } from "react-router-dom";

const NewUserForm = () => {
    const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6_1_0%]">
        <Navbar />
        <div className="h-[800px] p-5 m-5">
          <div className="max-w-3xl flex justify-between items-center mb-4">
            <h1 className="text-2xl text-red-500">
                NEW
            </h1>
            <button className=" px-5 py-1 border border-[#3e98c7] text-[13px] font-semibold text-gray-500" onClick={() => navigate('/')}> 
                Volver
            </button>
          </div>
          <FormNewUser NewUser />
        </div>
      </div>
    </div>
  )
}

export default NewUserForm;