import './header.css'
import axios from 'axios'
import { useState, useEffect, memo } from 'react'
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
            <div className="container-xl container-fluid py-2 text-center d-md-flex align-items-center">
                <div className='logo text-center'>
                    {datas.logo_shop ? <Link to="/"><img src={datas.logo_shop} width="90%" /></Link>
                        : ''}
                </div>
                <div className=' d-none d-md-block search'>
                    <div className='d-flex input-search'>
                        <form>
                            <input className='ps-2' placeholder='Tìm kiếm gì đó ...' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
                </div>
                <div className='  header-button-list  d-none d-md-flex  aligin-items-center'>
                    <button ><Link className='btn-hover p-1 p-sm-2 px-lg-3 ' to="/login">Đăng nhập</Link></button>
                    <button><Link className='btn-hover p-1 p-sm-2 px-lg-3 ' to="/register">Đăng ký</Link></button>
                    <button ><Link className='btn-hover p-1 p-sm-2 px-lg-3 ' to="/cart">Giỏ hàng<i className=" ms-2 fa-sharp fa-solid fa-cart-plus"></i></Link></button>
                </div>
                <hr className='d-md-none d-block' />
                <div className='d-flex   d-md-none justify-content-around'>
                    <div className='d-flex input-search'>
                        <form>
                            <input className='ps-2' placeholder='Tìm kiếm gì đó ...' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
                    
                    <div className='menu-header '>
                        <button>menu</button>
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