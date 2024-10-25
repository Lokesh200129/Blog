import { useDispatch } from "react-redux";
import authService from '../Auth/Auth'
import { logout } from "../feature/auth_slice";


function LogoutBtn (){
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })

    } 
    return(
        <button  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}>Logout</button>
    )

}
export default LogoutBtn;