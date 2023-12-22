import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://task-management-server-main.vercel.app"
})

const usePublicAxios = () =>{
    return axiosPublic;
}
export default usePublicAxios;