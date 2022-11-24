
import axios from 'axios'
import { useState,useEffect} from 'react'


function CallApi(){
    const[datas, setDatas] = useState([])
    useEffect(async ()=>{
        const res = await axios.get("../../Header.json")
        setDatas(res.data.header)
    },[])
        return datas
}


export default CallApi