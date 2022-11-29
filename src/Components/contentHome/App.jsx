import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'
function ContentHome(props) {
    const [heading, setHeading] = useState([])
    const [products, setProducts] = useState([])
    const getDatas = async () => {
        const res = await axios.get("../../../json/content.json")
        setHeading(res.data.category.filter((item) => item.category_name === props.category_name))
        setProducts(res.data.product)
    }
    useEffect(() => {
        getDatas()
    }, [])
    var id_category
    heading.length > 0 ? id_category = heading[0].category_id : 'khong ton tai'
    const listProduct = products.filter(product => product.category_id === id_category)

    return (
        <div className="container">
            {heading ? (
                heading.map((item, index) => {
                    return (
                        <h1 key={index} className="text-center">{item.category_name}</h1>
                    )
                })
            ) : ''}
            <div className="row">
                {listProduct.map((product, index) => (
                    <div key={index} className="col-3 ">
                        {index + 1 > 20 ? '' :
                            <div className="p-2 product">
                                <img src={product.url_img} width="100%" alt="img" />
                                <p className=" my-2">{product.product_name}</p>
                                <p >{product.price.toLocaleString()} VND</p>
                                <hr /> </div>
                            }
                           
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentHome