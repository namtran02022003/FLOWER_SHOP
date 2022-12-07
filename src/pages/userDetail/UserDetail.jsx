import { useNavigate} from 'react-router-dom'


export default function UserDetail(){
    const Navitage = useNavigate()
const user_json = localStorage.getItem('user')
const user = JSON.parse(user_json)
const logout=()=>{
    localStorage.removeItem('user')
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