
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../App'

function CartDetail({ product }) {
    const datas = useContext(CartContext)
    const RemoveProduct = (id) => {
        const cartCopy = datas.carts.filter(item => item.id !== id)
        datas.setCarts(cartCopy)
    }
    const upCount = (id) => {
        const cartCopy = datas.carts.slice();
        const index = cartCopy.findIndex((product) => product.id === id);
        const pr = cartCopy[index];
        cartCopy[index] = { ...pr, count: pr.count + 1 };
        datas.setCarts(cartCopy);
    }
    const dowCount = (id) => {
        const cartCopy = datas.carts.slice();
        const index = cartCopy.findIndex((product) => product.id === id);
        const pr = cartCopy[index];
        cartCopy[index] = { ...pr, count: pr.count - 1 };
        datas.setCarts(cartCopy);
    }
    return (
        <div className="row align-items-center">
            <div className="col-5">
                <div className="p-2 text-center">
                    <p>{product.product_name}</p>
                    <img src={product.url_img} width="50%" alt="img" />
                </div>
            </div>
            <div className="col-4">
                <div className="p-2 text-center">
                    <b>{product.price.toLocaleString()} VND</b>
                </div>
            </div>
            <div className="col-3">
                <div className="p-2 text-center d-flex justify-content-around">
                    <div className="d-flex align-items-center">
                        <button className='mx-2 btn btn-success' onClick={() => upCount(product.id)}>+</button>
                        <p className='m-0'>{product.count}</p>
                        <button className='mx-2 btn btn-success' disabled={product.count === 1} onClick={() => dowCount(product.id)}>-</button>
                    </div>
                    <div ><button className='btn btn-info' onClick={() => RemoveProduct(product.id)}>xoa</button></div>
                </div>
            </div>
        </div>
    )

}
export default CartDetail