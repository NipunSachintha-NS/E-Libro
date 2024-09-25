import React from 'react'
import NavBar from '../../components/NabBar';

function Profile() {
  return (
    <>
    <div className="flex">
    <NavBar/>
    <div className="flex-1 p-10 bg-white">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-200 p-10">
            <div className="bg-blue-500 p-6 rounded-full"></div>
          </div>
        </div>

        <div className="mt-8 max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-6 flex justify-between items-center">
            <label className="text-lg">Name</label>
            <input
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 text-right"
              type="text"
              placeholder
            />
            <button className="ml-2 text-blue-500 hover:text-blue-700">&#x270E;</button>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <label className="text-lg">Password</label>
            <input
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 text-right"
              type="password"
              placeholder
            />
            <button className="ml-2 text-blue-500 hover:text-blue-700">&#x270E;</button>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <label className="text-lg">Contact No</label>
            <input
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 text-right"
              type="text"
              placeholder
            />
            <button className="ml-2 text-blue-500 hover:text-blue-700">&#x270E;</button>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <label className="text-lg">Email</label>
            <input
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 text-right"
              type="email"
              placeholder
            />
            <button className="ml-2 text-blue-500 hover:text-blue-700">&#x270E;</button>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Profile