import { useContext } from 'react'
import logo from '../assets/google.png'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SocialLogin = () => {

    const { handleGoogleLogin, handleGithubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log("name",name)

    // google login
    const googleLogin = () => {
        handleGoogleLogin()
            .then((res) => {
                console.log(res.user)
                toast.success("User Create or Login successfully")
                navigate("/")

            })
            .catch((err) => {
                console.log(err)
                toast.error(err?.message)
            })
    }
    const githubLogin = () => {
        handleGithubLogin()
            .then((res) => {
                console.log(res.user)
                toast.success("User Create or Login successfully")
                navigate("/")

            })
            .catch((err) => {
                console.log(err)
                toast.error(err?.message)
            })
    }

    return (
        <div>
            <div className="divider text-white text-center py-2 ">Or Sign In With</div>
            <div className='md:flex justify-center'>
                <button onClick={googleLogin} className='flex bg-blue-800 rounded-md mx-auto py-2 px-5  mb-2 text-white gap-2 font-bold'> <img className='w-6' src={logo} alt="google" /> Continue With Google</button>
                <button onClick={githubLogin} className='flex bg-blue-800 rounded-md mx-auto py-2 px-5 text-white gap-2 font-bold'> <img className='w-6' src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt="google" /> Continue With Github</button>
            </div>
        </div>
    )
}

export default SocialLogin