import { ProductsContextProvider } from './context/productsContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './styles.ts'
import { Header } from './components/Header/index.tsx'

function App() {
  return (
    <AppLayout>
      <ProductsContextProvider>
        <Header />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductsContextProvider>
    </AppLayout>
  )
}

export default App
