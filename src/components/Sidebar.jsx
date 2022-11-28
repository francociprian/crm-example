import { useState } from "react";
import { Link } from "react-router-dom";
import { IconDashboard, IconProducts, IconNewUser, IconNewProduct } from "../assets/Icons";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      src: IconDashboard,
      link: "/"
    },
    {
      title: "New User",
      src: IconNewUser,
      link: "/user/new"
    },
    {
      title: "Products",
      src: IconNewProduct,
      // link: '/product/new',
      gap: true
    },
    {
      title: "New Product",
      src: IconProducts,
      // link: "/products",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        // className={` ${open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5 relative duration-500`} 
        className=" w-60 bg-dark-purple h-screen p-5 relative duration-500"
        >
        <div className="flex gap-x-4 items-center">
          <h1 className='text-white origin-left font-medium text-xl duration-200'>CRM<span className={!open && "hidden"}>Admin</span></h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link} key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              >
                <Menu.src />
                <span className={`${!open && "hidden"} origin-left duration-200 text-xs`}>
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        {/* <div className="absolute bottom-12">
          <button 
            onClick={() => setOpen(!open)}  
            className='flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4'
            >
            {!open ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
              </svg>
            }
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default Sidebar;