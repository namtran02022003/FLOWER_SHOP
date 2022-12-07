import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import CartDetail from './CartDeltail'
export default function Cart() {
    const user = localStorage.getItem('user')
    console.log(user)
    const dataCarts = useContext(CartContext)
    const total = ()=>{
        return dataCarts.carts.reduce((a, b) => a + b.price * b.count, 0)
    }

    if (dataCarts.carts.length > 0) {
        return (
            <div className='container'>
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
                {dataCarts.carts.map((product, index) => {
                    return (
                        <CartDetail key={index} product={product} />
                    )
                })}
                <hr />
                <div className=''>
                    <p >tong:{total()}</p>
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

}