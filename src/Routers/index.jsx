import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/Register/Register"
const publicRoutes = [
    {path:'/', component:Home},
    {path:'/cart', component:Cart},
    {path:'/login', component:Login},
    {path:'/register', component:Register},
]


export { publicRoutes }