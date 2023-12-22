
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div style={{ backgroundImage: 'url("https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-12/laptop-agencies-consulting-website-development-companies.png")' }} className='h-screen  w-full bg-no-repeat bg-center bg-cover'>
      <div className='bg-black w-full h-full bg-opacity-60'>
        <div className='max-w-7xl mx-auto flex px-3 justify-center text-gray-200   h-full flex-col'>
          <h1 className='text-4xl font-bold mb-2'>
          Hello,
            <span className='text-orange-600 leading-tight'> Users </span> <br />Sheikh Task
          </h1>
          <p className='mb-2 md:w-1/2 text-gray-300'>Assalamuwlaicum Dear Users. Sheikh Task Management is your go-to solution for streamlined task organization. Elevate your productivity by efficiently managing your daily tasks, projects, and goals in one centralized platform.</p>
          <Link to="/login">
            <button className='bg-orange-700 text-white w-fit  py-1 px-3 rounded-md'>
              Let’s Explore
            </button></Link>
            
        </div>
        
      </div>
      
    </div>
  )
}

export default Home