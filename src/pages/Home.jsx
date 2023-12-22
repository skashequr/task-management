import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/42/44/98/360_F_442449827_ispo2oI83ffX0TSax4Pgdd7xkqCA5ThA.jpg")' }} className='h-screen  w-full bg-no-repeat bg-center bg-cover'>
      <div className='bg-black w-full h-full bg-opacity-60'>
        <div className='max-w-7xl mx-auto flex px-3 justify-center text-gray-200   h-full flex-col'>
          <h1 className='text-4xl font-bold mb-2'>
          Hello,
            <span className='text-orange-600 leading-tight'> SCC </span> <br />Technovision Inc.
          </h1>
          <p className='mb-2 md:w-1/2 text-gray-300'>Technovision is a cutting-edge technology solutions company at the forefront of innovation.  Our dedicated team collaborates seamlessly to deliver tailored, forward-thinking solutions, driving success and growth for our clients globally.</p>
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