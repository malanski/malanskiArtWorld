import { ProductsContextProvider } from './context/productsContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './styles.ts'

function App() {
  return (
    <AppLayout>
      <ProductsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductsContextProvider>
    </AppLayout>
  )
}

export default App
