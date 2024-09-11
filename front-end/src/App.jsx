import {Outlet} from 'react-router-dom'
import Header from './components/Header.jsx'
import { HeaderProvider } from './context/HeaderContext.jsx'
import { Toaster } from 'sonner'

function App() {

  return (
    
    <>
    <HeaderProvider>
      <Toaster richColors position='bottom-right' toastOptions={{
      className: 'my-toast',
    }}/>
      <Header />
      <Outlet />
    </HeaderProvider>
    </>
  )
}

export default App
