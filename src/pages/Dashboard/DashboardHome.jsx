import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import usePublicAxios from '../../hooks/usePublicAxios'

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const navigate = useNavigate()
    const axiosPublic = usePublicAxios()




    const onSubmit = async (data) => {
        // console.log(data)

        try {
            // console.log(data)

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

            axiosPublic.post("/tasks", task)
            .then(res =>{
                // console.log(res.data)
                if(res.data.insertedId){
                    reset()
                    navigate("/dashboard/mytasks")
                }
            })
            .catch(err =>{
                console.log(err)
            })

            
            toast.success("Task added Successfully !!")
            // console.log(result)
            // navigate("/")



        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

   

    return (
        <div>
           
            <form onSubmit={handleSubmit(onSubmit)} className='flex py-3 flex-col gap-2'>

               {errors.title && <span className="text-red-600">Title is required</span>}
                <input className='py-1 px-3 rounded-md outline-none' {...register("title", { required: true })} type="text" placeholder='Task Taile' name='title' />

                {errors.description && <span className="text-red-600">Description is required</span>}
                <textarea className='py-1 px-3 rounded-md outline-none' {...register("description", { required: true })} name="description" placeholder='Task Description..' cols="30" rows="10"></textarea>
                
                {errors.deadline && <span className="text-red-600">Deadline is required</span>}
                <input className='py-1 px-3 rounded-md outline-none' {...register("deadline", { required: true })} type="date" name="deadline" placeholder='Deadline' />
               
                {errors.priority && <span className="text-red-600">Priority is required</span>}
                <select className='py-1 px-3 rounded-md outline-none' {...register("priority", { required: true })} name="priority" id="">
                    <option value="low">Select your priority</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>

                <button type='submit' className='bg-blue-700 py-1 rounded-md hover:bg-black text-white'>Create Task</button>
            </form>
        </div>
    )
}

export default DashboardHome