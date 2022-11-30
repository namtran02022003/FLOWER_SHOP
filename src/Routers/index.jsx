import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/Register/Register"
import Page1 from "../pages/pageDetailFooter/page1"
import Page2 from "../pages/pageDetailFooter/page2"
import Page3 from "../pages/pageDetailFooter/page3"
import Page4 from "../pages/pageDetailFooter/page4"
import Page5 from "../pages/pageDetailFooter/page5"
import BoaHoa from "../pages/detail_item_product/BoHoa"
import GioHoa from "../pages/detail_item_product/GioHoa"
import HoaCuoi from "../pages/detail_item_product/HoaCuoi"
import HoaKhaiTruong from "../pages/detail_item_product/HoaKhaiTruong"
import BinhHoa from "../pages/detail_item_product/BinhHoa"
import HoaTinhYeu from "../pages/detail_item_product/HoaTinhYeu"



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
    {path:'/bohoa', component:BoaHoa},
    {path:'/giohoa', component:GioHoa},
    {path:'/hoacuoi', component:HoaCuoi},
    {path:'/hoakhaitruong', component:HoaKhaiTruong},
    {path:'/hoatinhyeu', component:HoaTinhYeu},
    {path:'/binhhoa', component:BinhHoa},
   
]


export { publicRoutes }