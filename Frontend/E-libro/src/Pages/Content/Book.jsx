import React from "react";
import NavBar from "../../components/NabBar";
import { FaPenAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Book() {
  return (
    <>
      <div className="flex  bg-ash">
        <NavBar />
        <div className="grow">
        <Link to="/addBook"><button className="bg-green-700 w-48 h-14 text-white mt-40 ml-20 text-xl rounded-xl ">
            + Add Books
          </button></Link>  
          <div className="bg-slate-300  flex h-18 ml-20 mt-10 mr-44 rounded-md ">
            <p className="p-6 text-2xl ">1 . Rich Dad And Poor Dad </p>
            <FaPenAlt className="text-2xl m-6 ml-50 text-green-600 order-last" />
            <MdDeleteForever className="text-3xl mt-5  text-red-600" />
          </div>
        </div>
      </div>
    </>
  );
}
