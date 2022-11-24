
import Headers from "../Headers/Headers"
import Footer from "../Footer/Footer"

export default function DefauLayout({page}){
    
    return(
       <>
       <Headers />
      <div>
       {page}
      </div>
      <Footer />
       </>
    )
}