import React from 'react'


function Profile() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="flex-1 p-10 bg-white">
          <div className="mt-8 max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
            <div className="mb-6 flex justify-between items-center">
              <label className="text-lg">Name</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 "
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6 flex justify-between items-center">
              <label className="text-lg">Password</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 "
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6 flex justify-between items-center">
              <label className="text-lg">Contact No</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 "
                type="text"
                placeholder="Enter your contact number"
              />
            </div>

            <div className="mb-6 flex justify-between items-center">
              <label className="text-lg">Email</label>
              <input
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-2/3 "
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-8 py-2 mt-8 font-bold rounded-full hover:bg-blue-600 focus:outline-none">Save</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
