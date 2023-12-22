import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center h-screen text-center flex-col'>
        
        <iframe src="https://lottie.host/embed/794d244c-c3ae-4b30-ae8c-1b89b9bb8007/YJBtQmfuQu.json"></iframe>
        <Link to="/"><button className='bg-orange-500 py-1 px-3 text-white rounded-md hover:bg-purple-600 font-semibold'>Back to Home Page</button></Link>
    </div>
  )
}

export default ErrorPage