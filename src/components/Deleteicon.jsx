"use client"
import React from 'react'
import Image from 'next/image'


const Deleteicon = ({id}) => {

const removeTopic= async () =>{
  const confirmed = confirm("Are you sure?")
  if (confirmed) {
    console.log("Delete");
    await fetch(`http://localhost:3000/api/users/contact?id=${id}`,{
      method: "DELETE",
    })
  }


}


  return (
    <div>
   
    <button onClick={removeTopic}>
      <Image src={"/delete.png"} height={80} width={20} alt='hsh'></Image>
    </button>
    </div>
  )
}

export default Deleteicon
