import React from 'react';
import NavBar from '../../components/NabBar';
import { Link } from 'react-router-dom'; 

function Profile() {
  return (
    <>
      <div className="flex">
        <NavBar />
        <div className="flex-1 p-10 bg-white">
          <div className="flex justify-center">
            <div className="rounded-full bg-blue-200 p-10">
              <div className="bg-blue-500 p-6 rounded-full"></div>
            </div>
          </div>

          <div className="mt-8 max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">

            <div className="flex items-center mb-4">
              <label className="mr-4 w-1/4 text-lg">Name</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                type="text"
                placeholder="Enter your name"
              />
              <Link to="/edit">
                <button className="ml-2 text-blue-500 hover:text-blue-700 rotate-90">&#x270E;</button>
              </Link>
            </div>

            <div className="flex items-center mb-4">
              <label className="mr-4 w-1/4 text-lg">Password</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                type="password"
                placeholder="Enter your password"
              />
              <Link to="/edit">
                <button className="ml-2 text-blue-500 hover:text-blue-700 rotate-90">&#x270E;</button>
              </Link>
            </div>

            <div className="flex items-center mb-4">
              <label className="mr-4 w-1/4 text-lg">Contact No</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                type="text"
                placeholder="Enter your contact number"
              />
              <Link to="/edit">
                <button className="ml-2 text-blue-500 hover:text-blue-700 rotate-90">&#x270E;</button>
              </Link>
            </div>

            <div className="flex items-center mb-4">
              <label className="mr-4 w-1/4 text-lg">Email</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                type="email"
                placeholder="Enter your email"
              />
              <Link to="/edit">
                <button className="ml-2 text-blue-500 hover:text-blue-700 rotate-90">&#x270E;</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
