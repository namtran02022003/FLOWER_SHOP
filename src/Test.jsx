
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Test() {
    const [datas, setDatas] = useState([])
    const getDatas = async ()=> {
        const url = await axios.get("../json/content.json")
        setDatas(url.data.product)
    }
    useEffect(() => {
        getDatas()
    }, [])
    console.log(datas)
    return (
        <div>
           {datas.map((data,index) =>{
                return (
                    <img key={index} src={data.url_img} />
                )
           })}
        </div>
    )
}