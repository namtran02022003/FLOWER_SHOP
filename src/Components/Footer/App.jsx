import axios from 'axios'
import { useState, useEffect, memo } from 'react'
import './App.css'

function App() {
    const [dataLeft, setDataLeft] = useState([])
    const [iconsUrl, setIconUrl] = useState([])
    const [address, setAddress] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/footer_list.json')
        setDataLeft(res.data.list_header_left)
        setIconUrl(res.data.fl)
        setAddress(res.data.address)
    }
    useEffect(() => {
        getDatas()
    }, [])

    return (
        <div className="container ">
           
            <div className="row">
                <div className="col-4">
                    <div className='p-2'>
                        {dataLeft.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h5 className='my-2 py-2' >{item.title}</h5>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="col-4 pt-2">
                    <div className='p-2'>
                        <h5>{iconsUrl.heading}</h5>
                        <ul className='footer_ul_icons'>
                            {iconsUrl.content ? (
                                iconsUrl.content.map((data, index) => {
                                    return (
                                        <li key={index}><i className={data.icon} />{data.item}</li>
                                    )
                                })
                            ) : ''}
                        </ul>
                    </div>
                </div>
                <div className="col-4 pt-2">
                    <div className='p-2'>
                        <h5>{address.heading}</h5>
                        <ul className='footer_ul_icons'>
                            {address.content ? (
                                address.content.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <b >{data.title}</b>
                                            <p className='m-0'>{data.content}</p>

                                        </li>
                                    )
                                })
                            ) : ""}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(App)