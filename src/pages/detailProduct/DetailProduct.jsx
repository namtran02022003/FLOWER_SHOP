import axios from "axios"
import { useState, useEffect, useRef, useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import './App.css'
import { CartContext } from "../../App"
export default function DetailProduct() {
    const [toggleMessage, setTonggleMessage] = useState(false)
    const Navitage = useNavigate()
    const dataCartContext = useContext(CartContext)
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState([])
    const getProductDetail = async () => {
        const res = await axios.get("../../../json/content.json")
        const dataDetail = res.data.product.filter(product => product.id === Number(id))
        setProductDetail(dataDetail)
    }
    useEffect(() => {
        getProductDetail()
    }, [])
    const refNext = useRef()
    const refBack = useRef()
    useEffect(() => {
        const mySlide = document.querySelectorAll('.my_slides')
        if (mySlide[0]) {
            var indexs = 1
            refBack.current.onclick = () => { clickSlide(-1) }
            refNext.current.onclick = () => { clickSlide(1) }
            function clickSlide(x) {
                showSlide(indexs += x)
            }
            showSlide(indexs)
            function showSlide(n) {
                if (n > mySlide.length) { indexs = 1 }
                if (n < 1) { indexs = mySlide.length }
                for (var i = 0; i < mySlide.length; i++) {
                    mySlide[i].style.display = 'none'
                }
                mySlide[indexs - 1].style.display = 'block'
            }
        }
    })
    const handleCart = (product) => {
        const cartCopy = dataCartContext.carts.slice();
        const index = cartCopy.findIndex((datas) => datas.id === product.id); 
        if (index === -1) {
            cartCopy.push({ ...product, count: 1 });
        } else {
            const pr = cartCopy[index];
            cartCopy[index] = { ...pr, count: pr.count + 1 };
        }
        dataCartContext.setCarts(cartCopy);
    setTonggleMessage(true)
    }
    
    const ab = ()=>{
        setTonggleMessage(false)
    }
        if(toggleMessage){
            setTimeout(ab,3000)
        }
    
    function Message(){
        return(
            <div className="message_cart">
               <div className="text-center">
               <i className="fs-3 fa-solid fa-check"></i>
                <p>đã thêm vào giỏ hàng thành công</p>
               </div>
            </div>
        )
    }
    return (
        <div className="container">
         {toggleMessage &&    <Message />}
            {productDetail.map((product, index) => {
                return (
                    <div key={index} className="row">
                        <div className="col-12 col-lg-6">
                            <div className="p-2 text-center position-relative">
                                {product.img_detail.map((img, index) => {
                                    return (
                                        <div key={index} className="my_slides">
                                            <img src={img} className="w-50" alt="img detail" />
                                        </div>
                                    )
                                })}
                                <i ref={refBack} className=" click_left fa-solid fa-circle-left"></i>
                                <i ref={refNext} className="click_right fa-solid fa-circle-right"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="p-2">
                                <div className="">
                                    <h5 className="text-center">{product.product_name}</h5>
                                    <p className="fs-5 ">{product.detail_product.title}:</p>
                                    <p>{product.detail_product.content}</p>
                                </div>
                               <div className="d-flex justify-content-around">
                               <div className="text-center">
                                    <b className="text-danger fs-4">{product.price.toLocaleString()} VND<hr className="m-0"/></b>
                                </div>
                                <div className="text-center">
                                    <button onClick={() => handleCart(product)} className=" btn_addCart">add to cart</button>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}