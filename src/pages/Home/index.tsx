// import { ProductList } from '../../components/ProductList'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle } from '../styles'
import ProductsPagination from '../../components/ProductsPagination'
import { IntroImages } from '../../components/IntroImages'

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
import image11 from '../../assets/intro/introBlanket.jpg'
import image12 from '../../assets/intro/introApron.jpg'
import image13 from '../../assets/intro/introClock.jpg'
import image14 from '../../assets/intro/introMug.jpg'
import image15 from '../../assets/intro/introMug2.jpg'
import { ProductCard } from '../../components/ProductCard'

const introImagesArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
]

const productsPerPage = 20
export function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsContext = useContext(ProductsContext)
  const { clothesData, objectsData } = productsContext
  const allData = [...clothesData, ...objectsData]
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
      <h2>All products</h2>
      {allData.map((product, index) => (
        <ProductCard key={index} allData={currentProducts} data={product} />
      ))}
      {/* <ProductList allData={currentProducts} data={product}/> */}
    </PageStyle>
  )
}
