import axios from 'axios'
import { useState, useEffect } from 'react'
import App from './App'

export default function Footer() {
    const [datas, setDatas] = useState([])
    const getDatas = async () => {
        const datas = await axios.get("../../../json/gioi_thieu.json")
        setDatas(datas.data.gioi_thhieu)
    }
    useEffect(() => {
        getDatas()
    }, [])
    return (
        <>
        <div className='container mt-5' id="footer">
            <hr />
            {datas.map((item, index) => {
                return (
                    <div key={index}>
                        <h4 className='text-center' key={index}>{item.title}</h4>
                        <p>{item.content}</p>
                        <hr />
                    </div>
                )
            })}
           
        </div>
       <div className='bg_footer_bottom '>
       <App />
       </div>
        </>
    )
}