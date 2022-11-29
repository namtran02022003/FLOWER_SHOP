import Slide from "../../Components/slide/slide"
import ContentHome from "../../Components/contentHome/App"

export default function Home(){
    return(
        <div>
             <div className='container my-3'>
             <h6 className="text-center">ĐẶT HOA NHANH - GỌI NGAY 037 277 0547 - 090 619 2436 HOẶC 036 606 3709</h6>
                <Slide />
                <div className="content">
                    <ContentHome 
                    category_name = "Hoa Cưới"
                    />
                    <ContentHome 
                    category_name = "Hoa Tình Yêu"
                    />
                    <ContentHome 
                    category_name = "Hoa Lan"
                    />
                    <ContentHome 
                    category_name = "Hoa Hồng"
                    />
                    <ContentHome 
                    category_name = "Hoa Tang"
                    />
                </div>
            </div>
            
        </div>
    )
}