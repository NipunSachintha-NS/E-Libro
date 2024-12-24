import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  async function passData(e) {
    e.preventDefault(); 
    const data = { name, title, author, description };

    try {
      const response = await axios.post('http://localhost:3001/addbook', data);
      
  
      setName('');
      setTitle('');
      setAuthor('');
      setDescription('');
      
      if (response.status === 201) {

        navigate("/book"); 
      } else {
        console.error("Failed to add book, response status:", response.status); 
      }
    } catch (error) {
      console.error("Error adding book:", error); 
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Book Details
        </h2>
        <form onSubmit={passData}>
          <input
            type="text"
            placeholder="Name"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Title"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Author"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <input
            type="text"
            placeholder="Description"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
