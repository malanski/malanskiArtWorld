import { ProductList } from '../../components/ProductList'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle } from '../styles'
import ProductsPagination from '../../components/ProductsPagination'

import image11 from '../../assets/intro/introBlanket.jpg'
import image12 from '../../assets/intro/introApron.jpg'
import image13 from '../../assets/intro/introClock.jpg'
import image14 from '../../assets/intro/introMug.jpg'
import image15 from '../../assets/intro/introMug2.jpg'
import { IntroImages } from '../../components/IntroImages'

const introImagesArray = [image11, image12, image13, image14, image15]

const productsPerPage = 20
export function Objects() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsContext = useContext(ProductsContext)
  const { objectsData } = productsContext
  const allData = [...objectsData]
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allData.slice(indexOfFirstProduct, indexOfLastProduct)
  return (
    <PageStyle>
      <IntroImages introImagesArray={introImagesArray} />

      <ProductsPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allData.length / productsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page)
        }}
      />
      <h2>Objects</h2>

      <ProductList allData={currentProducts} />
    </PageStyle>
  )
}
