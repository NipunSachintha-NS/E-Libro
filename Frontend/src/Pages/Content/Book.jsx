import React, { useEffect , useState } from "react";
import NavBar from "../../components/NabBar";
import { FaPenAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Book() {
   const [data , setData]= useState([]);
   const navigate = useNavigate();
   
   const fetchBooks = async () =>{
    try {
      const response = await fetch("http://localhost:3001/getbooks"); 
      const datas =  await response.json(); 
       setData(datas);
       console.log("Fetching books...");
     console.log(datas);
     
  
  } catch (error) {
     }
  }
   
   useEffect(  ()=>{
    
    fetchBooks();
    
   },[]);

   async function bookDelete(id) {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`); // Correct template literal usage
      console.log("Deleted book with ID:", id);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }
  
async function getOnebook(id){
  try{
const data =await axios.get(`http://localhost:3001/get/${id}`);
// console.log("get book with ID:", id);
// console.log(data.data);
navigate("/Bedit" , { state: {btnId: id}});
  }
  catch(error){
    console.error("Error getting book:", error);
  }
}
  return (
    <>
      <div className="flex  bg-ash">
        <NavBar />
        <div className="grow">
        <Link to="/addBook"><button className="bg-green-700 w-48 h-14 text-white mt-40 ml-20 text-xl rounded-xl ">
            + Add Books
          </button></Link>  
          {
            data.map((book)=>(
              <div key={book.id} className="bg-slate-300  flex h-18 ml-20 mt-10 mr-44 rounded-md ">
            <p className="p-6 text-2xl "> {book.title} </p>
           <FaPenAlt className="text-2xl m-6 ml-50 text-green-600 order-last"  onClick={()=>getOnebook(book._id)}/>
            
            <MdDeleteForever className="text-3xl mt-5  text-red-600"
            onClick={()=> bookDelete(book._id) } />
            
          
    
          </div>
            ))
          }
         
        </div>
      </div>
    </>
  );
}
