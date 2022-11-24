import data from '../Header.json'
import axios from 'axios'
export default function Test(){
    axios.get("../Header.json")
    .then(res => console.log(res))
    return(
        <div>
            vgrevrv
        </div>
    )
}