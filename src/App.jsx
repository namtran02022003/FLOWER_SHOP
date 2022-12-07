import { createContext, useState } from 'react'
import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefauLayout from "./Components/defaulayout"
export const CartContext = createContext()
function App() {
  const [carts, setCarts] = useState([])
  return (
    <CartContext.Provider value={{
      carts: carts,
      setCarts: setCarts
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
