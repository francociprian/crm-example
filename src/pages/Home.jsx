import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../clients";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";
import { deleteUser } from '../clients';

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  async function loadUsers() {
    const res = await getUsers();
    setUsers(res)
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const onDelete = async (id) => {
    if (!confirm('Do you want to delete this client?')) {
      return
    }
    await deleteUser(id)
    navigate('/')
  }

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6_1_0%]">
        <Navbar />
        <div className="h-[800px] p-5 m-5 relative">
          <div className="max-w-7xl flex justify-between items-center mb-4">
            <h1 className="text-2xl text-red-500">
              USERS
            </h1>
          </div>
          
          <table className="border-collapse border border-gray-200 table-auto w-full max-w-7xl">
            <thead className='p-2 border border-gray-300 text-xs'>
              <tr>
                <th className="px-4 py-0.5 border border-gray-200"></th>
                <th className="px-2 py-0.5 border border-gray-200">PROFILE</th>
                <th className="px-2 py-0.5 text-left border border-gray-200">NAME</th>
                <th className="px-2 py-0.5 text-left border border-gray-200">JOB TITLE</th>
                <th className="px-2 py-0.5 text-left border border-gray-200">EMAIL</th>
                <th className="px-2 py-0.5 text-left border border-gray-200">PHONE</th>
                <th className="px-2 py-0.5 text-left border border-gray-200">ADDRESS</th>
                <th className="px-6 py-0.5 text-left border border-gray-200">STATUS</th>
                <th className="px-2 py-0.5 text-left border border-gray-200">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home;