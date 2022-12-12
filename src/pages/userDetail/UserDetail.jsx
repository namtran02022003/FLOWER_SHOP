import { useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../App'
export default function UserDetail(){
    const dataContext = useContext(CartContext)
    const Navitage = useNavigate()
const user_json = localStorage.getItem('user')
const user = JSON.parse(user_json)
const logout=()=>{
    localStorage.removeItem('user')
dataContext.setUser([])
dataContext.setCartsUser([])
    Navitage('/login')
}
     if(user){
        return(
            user.map(user =>{
                return(
                    <div className='text-center' key={user.id}>
                    <p>userName: {user.user_name}</p>
                    <p>Email: {user.email}</p>
                    <button className='btn btn-dark' onClick={()=>logout()}>Đăng xuất</button>
                    </div>
                )
            })
        )
     }
}