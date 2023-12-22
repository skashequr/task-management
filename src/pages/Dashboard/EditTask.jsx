import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../provider/AuthProvider'
import usePublicAxios from '../../hooks/usePublicAxios'

const EditTask = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const navigate = useNavigate()
    const axiosPublic = usePublicAxios()
    const {id} = useParams()
    // console.log(id)
    const [taskData, setTaskData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   console.log("first", taskData)

// const data = useLoaderData()
// console.log(taskData)

    useEffect(()=>{
        axiosPublic.get(`/tasks_single/${id}`)
        .then(res =>{
            // console.log(res.data)
            setTaskData(res.data);
            // setLoading(false);
        })
        .catch(err =>{
            console.log(err)
            // setLoading(false);
        })
    },[axiosPublic,id])




    const onSubmit = async (data) => {
        

        try {
            
            

            const task = {
                title: data.title,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority,
                status: "todo",
                email: user.email,
                photo: user.photoURL,
                name: user.displayName
            }
            // console.log(task)

            axiosPublic.put(`/tasks_update/${id}`, task)
            .then(res =>{
                // console.log(res)
                if(res.data.modifiedCount > 0){
                   toast.success("Updated task")
                    navigate("/dashboard/mytasks")
                }
            })
            

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

   

    return (
        <div className='bg-gray-400'>
            <h2 className='text-center text-3xl text-white py-4'>Update task</h2>
           
            <form onSubmit={handleSubmit(onSubmit)} className='flex py-3 flex-col gap-2 w-full md:w-2/3 lg:w-1/2 mx-auto'>

               {errors.title && <span className="text-red-600">Title is required</span>}
                <input className='py-1 px-3 rounded-md outline-none' defaultValue={taskData?.title}  {...register("title", { required: true })} type="text" placeholder='Task Taile' name='title' />

                {errors.description && <span className="text-red-600">Description is required</span>}
                <textarea className='py-1 px-3 rounded-md outline-none' defaultValue={taskData?.description} {...register("description", { required: true })} name="description" placeholder='Task Description..' cols="30" rows="10"></textarea>
                
                {errors.deadline && <span className="text-red-600">Deadline is required</span>}
                <input className='py-1 px-3 rounded-md outline-none' defaultValue={taskData?.deadline} {...register("deadline", { required: true })} type="date" name="deadline" placeholder='Deadline' />
               
                {errors.priority && <span className="text-red-600">Priority is required</span>}
                <select className='py-1 px-3 rounded-md outline-none' defaultValue={taskData?.priority} {...register("priority", { required: true })} name="priority" id="">
                    <option value="low">Select your priority</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>

                <button type='submit' className='bg-blue-700 py-1 rounded-md hover:bg-black text-white'>Update Task</button>
            </form>
        </div>
    )
}

export default EditTask