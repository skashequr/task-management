import React from 'react'
import { useDrag } from "react-dnd";
import { TfiWrite } from "react-icons/tfi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import usePublicAxios from '../hooks/usePublicAxios';
import { toast } from 'react-toastify';

const Task = ({to , handleDelete}) => {
    const axiosPublic = usePublicAxios()
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: to._id, status},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    
    //   console.log(isDragging)

   
  return (
    <li  ref={drag} className={`bg-white p-2 w-full rounded-md flex items-center gap-2 ${isDragging ? "opacity-25": "opacity-100"}`}>
    <div className="w-full">
      <h3 className="font-bold">{to?.title}</h3>
      <p className="text-sm text-gray-500">{to?.description}</p>
      <div className="flex my-2 w-full justify-between">
        <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">{to?.priority}</p>
        <p className="text-gray-400 text-sm">{to?.deadline}</p>
        <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
        <MdDelete onClick={()=>{handleDelete(to._id)}} title="Delete task" className="cursor-pointer text-xl text-red-600" />
      </div>
    </div>
  </li>
  )
}

export default Task