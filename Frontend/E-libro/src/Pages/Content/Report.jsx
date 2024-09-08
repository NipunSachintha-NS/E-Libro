import React from 'react'
import NavBar from '../../components/NabBar';

function Report() {
  return (
    <>
    <div className="flex">
      
  
     
    <NavBar/>
    <div className="w-screen h-screen flex items-center justify-center">

      <div className="border border-blue-300 w-96 h-72 p-8 bg-customBlueTransparent rounded-md  " >
        
        <h1 className= "text-2xl"> Generate Records  </h1>

<div className="flex items-center justify-center h-56">
<button className=" bg-darkBlue text-white p-3 rounded-2xl text-2xl hover:bg-black hover:text-white px-12 py-6">
Generate
</button>
</div>
        

</div>
</div>
 </div>
    
   
    </>
  )
}

export default Report