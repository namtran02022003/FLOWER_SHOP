import {memo} from 'react'
function HeaderBottom({ data }) {
    // console.log('render header bottom')
    return (
        <div className="heder_bottom container">
            <div className="d-flex justify-content-around">
                {data.map((button, index) => {
                    return (
                        <button className="button_page_header" key={index}>{button}</button>
                    )
                })}
            </div>
        </div>
    )
}
export default memo(HeaderBottom)