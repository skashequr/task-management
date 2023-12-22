import { TfiWrite } from "react-icons/tfi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import usePublicAxios from "../../hooks/usePublicAxios";
import { AuthContext } from "../../provider/AuthProvider";
import Task from "../../components/Task";
import { useDrop } from "react-dnd";


const MyTasks = () => {
  const axiosPublic = usePublicAxios()
  const { user } = useContext(AuthContext)
  const [tasks, setTasks] = useState(null)
  const [todo, setTodo] = useState(null)
  const [onGoing, setOnGoing] = useState(null)
  const [completed, setCompleted] = useState(null)

  const handleDelete = (id) =>{
    // console.log(id)
    axiosPublic.delete(`/tasks/${id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.deletedCount > 0){
            toast.success("Task Deleted")
        }
    })
    .catch(err =>{
        console.log(err)
    })

}

  useEffect(() => {

    axiosPublic.get(`/tasks/${user?.email}`)
      .then(res => {
        // console.log(res.data)
        setTasks(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user,handleDelete])



  useEffect(() => {
    const fTodos = tasks?.filter(task => task.status === "todo")
    const fOnGoing = tasks?.filter(task => task.status === "ongoing")
    const fCompleted = tasks?.filter(task => task.status === "completed")

    setTodo(fTodos)
    setOnGoing(fOnGoing)
    setCompleted(fCompleted)

  }, [tasks])

  const statuses = ["todo", "ongoing", "completed"]

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) =>addItemToSection(item.id,item.status) ,
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))
  
  const addItemToSection = (id,status) =>{
    console.log("droped",id,status)
    // setTasks((prev)=>{
    //   console.log("prev",prev)
    //   return prev
    // })
  }


  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3" ref={drop} >
      {/* to do list */}
      <div className={`border p-5 ${isOver ? "bg-slate-200" : ""}`} ref={drop}>
        <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2"><TfiWrite className="text-blue-700" /> To-Do List</h2>
        <ul className="py-4 flex flex-col gap-2">


          {
            todo?.map((to, inx) => (
             <Task handleDelete={handleDelete}  key={inx} to={to} />
            ))
          }




        </ul>
      </div>
      {/* on going list */}
      <div className={`border p-5 ${isOver ? "bg-slate-200" : ""}`}  ref={drop}>
        <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2"><TfiWrite className="text-blue-700" /> Ongoing List</h2>
        <ul className="py-4 flex flex-col gap-2">

       
        {
            onGoing?.map((to, inx) => (
              <Task handleDelete={handleDelete} key={inx} to={to} />
            ))
          }
          


        </ul>
      </div>
      {/* complete list */}
      <div className={`border p-5 ${isOver ? "bg-slate-200" : ""}`}  ref={drop}>
        <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2"><TfiWrite className="text-blue-700" /> completed Task</h2>
        <ul className="py-4 flex flex-col gap-2">

         

          {
            completed?.map((to, inx) => (
              <Task handleDelete={handleDelete}  key={inx} to={to} />
            ))
          }

        </ul>
      </div>
    </div>
  )
}

export default MyTasks