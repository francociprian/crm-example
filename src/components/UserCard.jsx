import { useNavigate } from "react-router-dom";

export default function UserCard({ user, onDelete }) {
  const navigate = useNavigate();
  const { name, email, phone, id, image, address, job, status } = user;

  const statusProfile = () => {
    if(status === 'Active'){
      return 'bg-emerald-100 text-green-900'
    } 
    if(status === 'Inactive') {
      return 'bg-amber-100 text-yellow-700'
    }
  };

  return (
    <>
      <tr className='p-2 border border-gray-300 text-xs'>
        <td className="px-2 py-1 border border-gray-200 mx-auto">
          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        </td>
        <td className="px-2 py-1 border border-gray-200">
          <img className="w-9 h-9 rounded-full mx-auto" src={image} />
        </td>
        <td className="px-2 py-0.5 border border-gray-200">{name.firstname} {name.lastname}</td>
        <td className="px-2 py-0.5 border border-gray-200">{job}</td>
        <td className="px-2 py-0.5 border border-gray-200">{email}</td>
        <td className="px-2 py-0.5 border border-gray-200">{phone}</td>
        <td className="px-2 py-0.5 border border-gray-200">{address.city}, {address.street} {address.number}</td>
        <td className="px-2 py-0.5 text-center border border-gray-200"><span className={`px-3 py-0.5 rounded-full ${statusProfile()}`}>{status}</span></td>
        <td className="px-2 py-0.5 w-36">
          <button
            className="px-3 py-1 rounded text-xs font-semibold text-gray-50 bg-green-500"
            onClick={() => navigate(`user/${id}/edit`)}
          >
            Edit
          </button>
          <button
            className="ml-2 px-3 py-1 rounded text-xs font-semibold text-gray-50 bg-red-500"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}
