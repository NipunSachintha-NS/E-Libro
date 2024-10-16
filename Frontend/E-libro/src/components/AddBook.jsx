import React from "react";

function AddBook() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Book Details
        </h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Title"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Author"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Description"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="block w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
