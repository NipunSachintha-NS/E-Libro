import React from "react";
import NavBar from "../../components/NabBar";
import { FaPenAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Book() {
  return (
    <>
     <div className="flex">
    <NavBar/>
    <div>Books</div>
    </div>
    </>
  );
}
