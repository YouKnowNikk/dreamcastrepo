import React, { useState } from 'react';

const User = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto my-8">
      
      <div className="overflow-x-auto">
        <table className="max-w-full bg-white border border-gray-300">
          <thead className='bg-slate-300'>
            <tr>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Website
              </th>
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.address.street}, {user.address.city}, {user.address.zipcode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.company.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.website}</td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => alert(`Edit user: ${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
