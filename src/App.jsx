
import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefauLayout from "./Components/defaulayout"
function App() {
  return (
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
  )
}

export default App
