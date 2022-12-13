import { useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../App'
export default function UserDetail(){
    const dataContext = useContext(CartContext)
    const Navitage = useNavigate()

const logout=()=>{
    localStorage.removeItem('user')
dataContext.setUser({})
dataContext.setCartsUser([])
    Navitage('/login')
}
     if(dataContext.user){
        return(
                    <div className='text-center pt-2'  >
                    <p>userName: {dataContext.user.user_name}</p>
                    <p>Email: {dataContext.user.email}</p>
                    <button className='btn btn-dark' onClick={()=>logout()}>Đăng xuất</button>
                    </div>
        )
     }
}