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
          <div className=" my-4 max-w-xs">
            <div className="search flex items-center justify-between border-[0.5px] border-gray-200 p-1">
              <input className=" border-none outline-none bg-transparent" type="text" placeholder="Search..." />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
          <table className="border-collapse border border-gray-200 table-auto">
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