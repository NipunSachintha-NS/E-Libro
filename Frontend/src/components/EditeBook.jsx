import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditBook() {
  const location = useLocation();
  const btnId = location.state?.btnId;
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  // Fetch data and set individual states
  useEffect(() => {
    async function fetchBookData() {
      if (!btnId) {
        console.error("Button ID is missing");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3001/get/${btnId}`);
        const { name, title, author, description } = response.data;

        setName(name || '');
        setTitle(title || '');
        setAuthor(author || '');
        setDescription(description || '');
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }

    fetchBookData();
  }, [btnId]);

  async function passData(e) {
    e.preventDefault();
    const data = { name, title, author, description };

    try {
      const response = await axios.patch(`http://localhost:3001/book/${btnId}`, data);

      // Reset form states
      setName('');
      setTitle('');
      setAuthor('');
      setDescription('');

      if (response.status === 200) {
        navigate("/book");
      } else {
        console.error("Failed to update book, response status:", response.status);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-96 h-4/6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          Edit Book
        </h2>
        <form onSubmit={passData}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="block w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="block w-full mb-4 px-3 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
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

export default EditBook;
