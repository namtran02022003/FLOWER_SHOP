import './header.css'
import axios from 'axios'
import { useState, useEffect, memo, useContext } from 'react'
import HeaderBottom from './Header_bottom'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'
import { CartContext } from '../../App'
function Headers() {
    console.log('render header')
    const dataCart = useContext(CartContext)
    const Navigation = useNavigate()
    const [listButtonPage, setListButtonPage] = useState([])
    const [datas, setDatas] = useState([])
    const getDatas = async () => {
        const datas = await axios.get("../../../json/headers.json")
        setDatas(datas.data)
        setListButtonPage(datas.data.button_page)
    }
    useEffect(() => {
        getDatas()
    }, [])
    // console.log('render header top')
    const user_json = localStorage.getItem('user')
    const user = JSON.parse(user_json)
    const abc = () => {
        Navigation(`/userdetail`)
    }
    // console.log(dataCart)
   
    return (
        <div id="headers">

            <div className="container-xl container-fluid py-2 text-center d-md-flex align-items-center">
                <div className='logo text-center'>
                    {datas.logo_shop ? <Link to="/"><img src={datas.logo_shop} width="90%" /></Link>
                        : ''}
                </div>
                <div className=' d-none d-md-block search'>
                    <Search />
                </div>
                <div className='  header-button-list  d-none d-md-flex  align-items-center'>
                    {user ? (
                        <div>
                            {user.map(user => <div onClick={() => abc()} key={user.id}> <i className="fa-regular mx-2 fa-user"></i>{user.user_name}</div>)}
                        </div>
                    ) : (
                        <> <Link className='btn-hover p-0 px-lg-3 py-2 ' to="/login">Đăng nhập</Link>
                            <Link className='btn-hover p-0 px-lg-3 py-2 ' to="/register">Đăng ký</Link>
                        </>
                    )}

                    <div className='d-flex align-items-center position-relative'>
                        <Link className=' btn-hover p-0 px-lg-3 py-2 ' to="/cart"><i className="cart_icon  fa-sharp fa-solid fa-cart-plus"></i></Link>
                        <span className='length_cart'>{dataCart.count}</span>
                    </div>
                </div>

            </div>
            <div className='bg_header_bottom shadow py-1'>
                <HeaderBottom data={listButtonPage} />
            </div>

        </div>

    )
}
export default memo(Headers)