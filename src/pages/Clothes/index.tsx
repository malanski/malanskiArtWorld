import { ProductList } from '../../components/ProductList'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'

export function Clothes() {
  const productsContext = useContext(ProductsContext)
  const { clothesData } = productsContext
  const allData = [...clothesData]
  return (
    <>
      <ProductList allData={allData} />
    </>
  )
}
