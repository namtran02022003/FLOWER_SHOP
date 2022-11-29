import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/Register/Register"
import Page1 from "../pages/pageDetailFooter/page1"
import Page2 from "../pages/pageDetailFooter/page2"
import Page3 from "../pages/pageDetailFooter/page3"
import Page4 from "../pages/pageDetailFooter/page4"
import Page5 from "../pages/pageDetailFooter/page5"

const publicRoutes = [
    {path:'/', component:Home},
    {path:'/cart', component:Cart},
    {path:'/login', component:Login},
    {path:'/register', component:Register},
    {path:'/cauhoithuonggap', component:Page1},
    {path:'/chinhsachhoantien', component:Page2},
    {path:'/chinhsachvanchuyen', component:Page3},
    {path:'/thongtinlienhe', component:Page4},
    {path:'/gioithieu', component:Page5},
]


export { publicRoutes }