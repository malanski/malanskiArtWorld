import { ProductList } from '../../components/ProductList'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle } from './styles'

export function Home() {
  const productsContext = useContext(ProductsContext)
  const { clothesData, objectsData } = productsContext
  const allData = [...clothesData, ...objectsData]
  return (
    <PageStyle>
      <ProductList allData={allData} />
    </PageStyle>
  )
}
