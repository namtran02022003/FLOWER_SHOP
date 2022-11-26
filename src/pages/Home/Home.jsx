import Slide from "../../Components/slide/slide"
import ContentHome from "../../Components/contentHome/App"

export default function Home(){
    return(
        <div>
             <div className='container my-3'>
             <h6 className="text-center">ĐẶT HOA NHANH - GỌI NGAY 1900 633 045 - 0865 160 360 HOẶC 0918 491 941</h6>
                <Slide />
                <div className="content">
                    <ContentHome 
                    category_name = "hoa cưới"
                    />
                    <ContentHome 
                    category_name = "hoa tình yêu"
                    />
                    <ContentHome 
                    category_name = "hoa lan"
                    />
                    <ContentHome 
                    category_name = "hoa hồng"
                    />
                    <ContentHome 
                    category_name = "hoa tang"
                    />
                </div>
            </div>
        </div>
    )
}