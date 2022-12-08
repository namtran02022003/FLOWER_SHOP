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
                    <div key={user.id}>
                    <h1 className="text-center" >userName: {user.user_name}</h1>
                    <button onClick={()=>logout()}>Đăng xuất</button>
                    </div>
                )
            })
        )
     }
}