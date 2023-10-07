import { ProductList } from '../../components/ProductList'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'

export function Objects() {
  const productsContext = useContext(ProductsContext)
  const { objectsData } = productsContext
  const allData = [...objectsData]
  return (
    <>
      <ProductList allData={allData} />
    </>
  )
}
