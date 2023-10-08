import { ProductList } from '../../components/ProductList'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle } from '../styles'
import ProductsPagination from '../../components/ProductsPagination'
const productsPerPage = 20

export function Clothes() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsContext = useContext(ProductsContext)
  const { clothesData } = productsContext
  const allData = [...clothesData]
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allData.slice(indexOfFirstProduct, indexOfLastProduct)
  return (
    <PageStyle>
      <h2>Clothes</h2>
      <ProductsPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allData.length / productsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page)
        }}
      />
      <ProductList allData={currentProducts} />
    </PageStyle>
  )
}
