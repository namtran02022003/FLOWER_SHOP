import { memo } from 'react'
import { NavLink } from 'react-router-dom'

function HeaderBottom({ data }) {
    
    // console.log('render header bottom')
    return (
        <div className="heder_bottom container">
            <div className="d-flex justify-content-around">
                {data.map((button, index) => {
                    return (
                       <NavLink key={index} to={`/${button.url}`} className={`button_page_header `}>
                       {button.item}
                       </NavLink>
                    )
                })}
            </div>
        </div>
    )
}


export default memo(HeaderBottom)