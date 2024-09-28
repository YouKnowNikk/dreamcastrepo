import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../services/users/userAction';
import { FaSpinner } from 'react-icons/fa';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.users);

  const handleAddUser = async () => {
    setSuccess(false); 
    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    };

    try {
      await dispatch(addUser(newUser)).unwrap(); 
      setSuccess(true)
      setName(''); 
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-bold mb-4">Add New User</h2>

     
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          User added successfully!
        </div>
      )}

     
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter name"
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter username"
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter email"
          disabled={loading}
        />
      </div>

      <button
        onClick={handleAddUser}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${loading && 'opacity-50 cursor-not-allowed'}`}
        disabled={loading}
      >
        {loading ? (
          <FaSpinner className="animate-spin inline-block mr-2" />
        ) : (
          'Add User'
        )}
      </button>
    </div>
  );
};

export default AddUserForm;
