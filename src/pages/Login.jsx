import React, { useContext } from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../provider/AuthProvider'
import { toast } from 'react-toastify'

const Login = () => {
  const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
  const navigate = useNavigate()
  const {signInUser} = useContext(AuthContext)

  const onSubmit = async (data) => {
     // console.log(data)
     signInUser(data.email,data.password)
     .then(res =>{
       console.log(res.user)
       toast.success("Login Successfully !!")
       navigate("/")
     })
     .catch(error =>{
       console.log(error)
       toast.error(error.message)
     })
  }
  return (
    <div>

      <div className="h-screen  ">
        <div className="px-3">
          <div className="  w-full h-screen flex justify-center items-center py-8 shadow-2xl bg-base-100">
            <div className=' w-full mx-auto rounded-md py-5 px-2 bg-gray-900 md:w-2/3'>
              <h2 className='text-center text-3xl font-bold mb-3'><span className='text-orange-500'>Sign In </span></h2>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full px-5">

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
              
                <div className="form-control mt-3">
                  <input className="w-full rounded-md py-1 px-3 mb-2 text-white bg-blue-700" type="submit" value="Sign In" />
                </div>
              </form>
              <p className="px-6 text-white text-right "><small>
                Don't have an account <Link to="/register" className='text-blue-700 font-bold'>Sign Up</Link></small></p>
              <SocialLogin></SocialLogin>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login