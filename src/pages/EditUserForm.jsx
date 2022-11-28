import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers } from "../clients";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FormEditUser from '../components/FormEditUser'

const EditUserForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [valuesUser, setValuesUser] = useState({
    address: {
      geolocation: {
        lat: '',
        long: '',
      },
      city: '',
      street: '',
      number: '',
      zipcode: '',
    },
    username: '',
    name: {
      firstname: '',
      lastname: '',
    },
    email: '',
    phone: '',
    image: '',
    status: '',
    job: '',
    id:''
  })

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const response = await editUsers(params.id)
        setValuesUser({
          address: {
            geolocation: {
              lat: response.address.geolocation.lat,
              long: response.address.geolocation.long,
            },
            city: response.address.city,
            street: response.address.street,
            number: response.address.number,
            zipcode: response.address.zipcode,
          },
          username: response.username,
          name: {
            firstname: response.name.firstname,
            lastname: response.name.lastname,
          },
          email: response.email,
          phone: response.phone,
          image: response.image,
          status: response.status,
          job: response.job,
          id: response.id
        })
      }
    }
    loadTask();
  }, [])

return (
  <div className="flex w-full">
    <Sidebar />
    <div className="flex-[6_1_0%]">
      <Navbar />
      <div className="h-[800px] p-5 m-5">
        <div className=" max-w-7xl flex justify-between items-center mb-4">
          <h1 className="text-2xl text-red-500">
            Edit User
          </h1>
          <button className=" px-5 py-1 border border-[#3e98c7] text-[13px] font-semibold text-gray-500" onClick={() => navigate('/')}>
            Volver
          </button>
        </div>
        <FormEditUser valuesUser={valuesUser} />
      </div>
    </div>
  </div>
)
}

export default EditUserForm;