import './header.css'
import axios from 'axios'
import { useState, useEffect,memo } from 'react'
import HeaderBottom from './Header_bottom'
import { Link } from 'react-router-dom'

 function Headers() {
    const [slides, setSlides] = useState([])
    const [listButtonPage, setListButtonPage] = useState([])
    const [datas, setDatas] = useState([])
    const getDatas = async () => {
        const datas = await axios.get("../../../json/headers.json")
        setDatas(datas.data)
        setListButtonPage(datas.data.button_page)
        setSlides(datas.data.images_slide)
    }
    useEffect(() => {
        getDatas()
    }, [])
    // console.log('render header top')
    return (
        <div id="headers">
            <div className="container py-2 text-center">
                <div className=' div_inline search'>
                    <div className='d-flex input-search'>
                        <form>
                            <input className='ps-2'  placeholder='tìm kiếm gì đó ...'/>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
                </div>
                <div className=' div_inline logo'>
                    {datas.logo_shop ? <Link to="/"><img src={datas.logo_shop} width="100%" /></Link>
                        : ''}
                </div>
                <div className=' div_inline button-header'>
                    <div className='header-button-list d-flex justify-content-center aligin-items-center'>
                        <button ><Link className='btn-hover btn-login' to="/login">đăng nhập</Link></button>
                        <button><Link className='btn-hover btn-register' to="/register">đăng ký</Link></button>
                        <button ><Link className='btn-hover btn-cart' to="/cart">giỏ hàng<i className=" ms-2 fa-sharp fa-solid fa-cart-plus"></i></Link></button>
                    </div>
                </div>

            </div>
            <div className='bg_header_bottom py-1'>
                <HeaderBottom data={listButtonPage} />
            </div>

        </div>

    )
}
export default memo(Headers)