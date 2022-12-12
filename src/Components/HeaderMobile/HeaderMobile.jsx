import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function HeaderMobile({ count, user, abc, datas }) {
    const [showMenu, setShowMenu] = useState(false)
    const Navitage = useNavigate()
    const handleItem = (url) => {
        Navitage(`/${url}`)
        setShowMenu(false)
    }
    return (
        <div className="header_mobile d-flex ">
            <div className='position-relative'>
                <button onClick={() => setShowMenu(!showMenu)} className='btn_menu_page_mobile'>menu</button>
                {showMenu && <ul className='list_button_ul'>
                    {datas.map(data => (
                        <li onClick={() => handleItem(data.url)} key={data.item}>{data.item}</li>
                    ))}
                </ul>}
            </div>
            <div className='search_mobile'>
                    <button className='btn_account' onClick= {()=> Navitage('/search')}>tìm kiếm </button>
                </div>
            <div>
                <div className='d-flex align-items-center position-relative'>
                    <Link className=' btn-hover p-0 px-lg-3 py-2 ' to="/cart"><i className="cart_icon  fa-sharp fa-solid fa-cart-plus"></i></Link>
                    <span className='length_cart'>{count}</span>
                </div>
            </div>
            {user ? (
                <div>
                    {user.map(user => <button className='btn_account' onClick={() => abc()} key={user.id}> <i className="fa-regular mx-2 fa-user"></i>{user.user_name}</button>)}
                </div>
            ) :
                <div className='position-relative'>
                    <button onClick={() => Navitage('/login')} className=' btn_account'>Đăng nhập</button>
                </div>}
               
        </div>
    )
}
export default HeaderMobile