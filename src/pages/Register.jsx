import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../components/SocialLogin'
import { AuthContext } from '../provider/AuthProvider'
import { imageUpload } from '../api/uploadImage'
import { toast } from 'react-toastify'

const Register = () => {
  const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
  const navigate = useNavigate()
  const {signup,updateUserProfile} = useContext(AuthContext)

  const onSubmit = async (data) => {
     // console.log(data)

     try {
      // console.log(data)

      // 1. image host
      const imageData = await imageUpload(data.photo[0])
      // console.log(imageData)

      // 2. create user
     const result = await signup(data.email, data.password)
     //    console.log(result)

      // 3. update user
      await updateUserProfile(data.name, imageData?.data?.display_url)
      toast.success("SignUp Successfully !!")
      // console.log(result)
      navigate("/")

     

  } catch (error) {
      console.log(error)
      toast.error(error.message)
  }

  }
  return (
    <div>

      <div className="h-screen  ">
        <div className="px-3">
          <div className="  w-full h-screen flex justify-center items-center py-8 shadow-2xl bg-base-100">
            <div className=' w-full mx-auto rounded-md py-5 px-2 bg-gray-900 md:w-2/3'>
              <h2 className='text-center text-3xl font-bold mb-3'><span className='text-orange-500'>Sign Up </span></h2>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full px-5">

                <div className="form-control">
                  {errors.name && <span className="text-red-600">Name is required</span>}
                  <input {...register("name", { required: true })} type="text" name="name" placeholder="Enter your Full Name" className="w-full rounded-md py-1 px-3 mb-2" />
                </div>

                <div className="form-control">
                  {errors.email && <span className="text-red-600">Email is required</span>}
                  <input {...register("email", { required: true })} type="email" name="email" placeholder=" Enter your Email" className="w-full rounded-md py-1 px-3 mb-2" />
                </div>

                <div className="form-control">
                  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                  {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                  {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                  <input type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })}
                    placeholder="password" className="w-full rounded-md py-1 px-3 mb-2" />

                </div>
                <div className="form-control">
                  {errors.photoURL && <span className="text-red-600">Photo is required</span>}
                  <input {...register("photo", { required: true })} type="file" placeholder="Photo" className="w-full rounded-md py-1 px-3 mb-2" />
                </div>
                <div className="form-control mt-3">
                  <input className="w-full rounded-md py-1 px-3 mb-2 text-white bg-blue-700 cursor-pointer" type="submit" value="Sign Up" />
                </div>
              </form>
              <p className="px-6 text-white text-right "><small>Already have an account <Link to="/login" className='text-blue-700 font-bold'>Sign In</Link></small></p>
              <SocialLogin></SocialLogin>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Register