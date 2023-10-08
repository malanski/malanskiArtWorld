import { ProductList } from '../../components/ProductList'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle } from '../styles'
import ProductsPagination from '../../components/ProductsPagination'

import image1 from '../../assets/intro/introDress2.jpg'
import image2 from '../../assets/intro/introDress1.jpg'
import image3 from '../../assets/intro/introDress3.jpg'
import image4 from '../../assets/intro/introDress4.jpg'
import image5 from '../../assets/intro/introDress5.jpg'
import image6 from '../../assets/intro/introDress6.jpg'
import image7 from '../../assets/intro/introDress7.jpg'
import image8 from '../../assets/intro/introDress8.jpg'
import image9 from '../../assets/intro/backPrint1.jpg'
import image10 from '../../assets/intro/backPrint2.jpg'
import { IntroImages } from '../../components/IntroImages'

const introImagesArray = [
  image6,
  image7,
  image8,
  image9,
  image10,
  image1,
  image2,
  image3,
  image4,
  image5,
]

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
      <IntroImages introImagesArray={introImagesArray} />

      <ProductsPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allData.length / productsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page)
        }}
      />
      <h2>Clothes</h2>

      <ProductList allData={currentProducts} />
    </PageStyle>
  )
}
