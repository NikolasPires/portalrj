import {Outlet} from 'react-router-dom'
import Header from './components/Header.jsx'
import { HeaderProvider } from './context/HeaderContext.jsx'

function App() {

  return (
    
    <>
    <HeaderProvider>
      <Header />
      <Outlet />
    </HeaderProvider>
    </>
  )
}

export default App
