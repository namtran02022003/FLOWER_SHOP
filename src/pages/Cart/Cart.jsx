import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../App'
import CartDetail from './CartDeltail'
import { useNavigate } from 'react-router-dom'
export default function Cart() {
    console.log('render cart')
    const Navitage = useNavigate()
    const dataCarts = useContext(CartContext)
    const user = JSON.parse(localStorage.getItem('user'))
    
    if( user && user.length > 0){
        const dataCartLocalstorage = localStorage.getItem(`cart${user[0].id}`)
        var CARTDATAS = JSON.parse(dataCartLocalstorage)
        if (CARTDATAS.carts && CARTDATAS.carts.length > 0) {
            return (
                <div className='container'>
                    <button onClick={()=> dataCarts.setCount(pre => pre+1)}>fdf</button>
                    <h1 className='text-center'>Giỏ Hàng</h1>
                    <hr />
                    <div className='row'>
                        <div className="col-5">
                            <div className="p-2 text-center">
                                <h4>tên sản phẩm</h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="p-2 text-center">
                                <h4>giá</h4>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="p-2 text-center">
                                <h4>tùy chọn</h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                    {CARTDATAS.carts.map((product, index) => {
                        return (
                            <CartDetail key={index} product={product} />
                        )
                    })}
                    <hr />
                    <div className=''>
                        {/* <p >tong:{total()}</p> */}
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <h1 className='text-center'>Giỏ Hàng</h1>
                    <hr></hr>
                    <h5 className='text-center'>Giỏ Hàng Của Bạn Đang Trống</h5>
                </>
            )
    
        }
    }else{
        return(
            <div >
                <p>vui long dang nhap <button onClick={()=>Navitage('/login')}>dang nhap</button></p>
            </div>
        )
    }

   


    // const user = localStorage.getItem('user')
    // console.log(user)
    // const dataCarts = useContext(CartContext)
    // const total = ()=>{
    //     return dataCarts.carts.reduce((a, b) => a + b.price * b.count, 0)
    // }

    // if (dataCarts.carts.length > 0) {
    //     return (
    //         <div className='container'>
    //             <h1 className='text-center'>Giỏ Hàng</h1>
    //             <hr />
    //             <div className='row'>
    //                 <div className="col-5">
    //                     <div className="p-2 text-center">
    //                         <h4>tên sản phẩm</h4>
    //                     </div>
    //                 </div>
    //                 <div className="col-4">
    //                     <div className="p-2 text-center">
    //                         <h4>giá</h4>
    //                     </div>
    //                 </div>
    //                 <div className="col-3">
    //                     <div className="p-2 text-center">
    //                         <h4>tùy chọn</h4>
    //                     </div>
    //                 </div>
    //                 <hr />
    //             </div>
    //             {dataCarts.carts.map((product, index) => {
    //                 return (
    //                     <CartDetail key={index} product={product} />
    //                 )
    //             })}
    //             <hr />
    //             <div className=''>
    //                 <p >tong:{total()}</p>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h1 className='text-center'>Giỏ Hàng</h1>
    //             <hr></hr>
    //             <h5 className='text-center'>Giỏ Hàng Của Bạn Đang Trống</h5>
    //         </>
    //     )

    // }

}