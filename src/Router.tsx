import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Objects } from './pages/Objects'
import { Clothes } from './pages/Clothes'
import { DefaultLayout } from './layouts/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/objects" element={<Objects />} />
      </Route>
    </Routes>
  )
}
