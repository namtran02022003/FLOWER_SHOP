import { createContext, useState, useEffect } from 'react'
import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefauLayout from "./Components/defaulayout"
export const CartContext = createContext()
function App() {
  const [cartsUser, setCartsUser] = useState([])
  const [user, setUser] = useState([])
  const [count,setCount] = useState(0)
  function getDatas() {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      const dataUser = JSON.parse(userStorage)
      setUser(dataUser)
      const cartStorage = localStorage.getItem(`cart${dataUser[0].id}`)
      if(cartStorage){
        const dataCartStorage = JSON.parse(cartStorage)
        console.log(dataCartStorage)
        setCartsUser({
          userid:dataUser[0].id,
          carts:[...dataCartStorage.carts]
        })
      }else{
        const CART = {
          userid:dataUser[0].id,
          carts:[]
        }
        localStorage.setItem(`cart${dataUser[0].id}`,JSON.stringify(CART))
        setCartsUser(CART)
      }
    } else {
      console.log('k')
    }
  }
  useEffect(() => {
    getDatas()
  }, [])
  console.log('reder app')
  useEffect(()=>{
    if(cartsUser.carts ){
        const total = ()=>{
            return cartsUser.carts.reduce((a,b) => a+ b.count ,0)
        }
        setCount(total())
        console.log(total())
       }else{
        setCount(0)
       }
   })
  return (
    <CartContext.Provider value={{
      cartsUser: cartsUser,
      setCartsUser: setCartsUser,
      user: user,
      setUser: setUser,
      count:count,
      setCount:setCount
    }}>
      <div className="app">
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              var Page = route.component
              let Layout = DefauLayout
              return <Route key={index} path={route.path} element={<Layout page={<Page />}></Layout>}></Route>
            })}
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  )
}

export default App
