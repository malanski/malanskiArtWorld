import { ProductList } from '../../components/ProductList'
import { SetStateAction, useContext, useState } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle } from '../styles'
import ProductsPagination from '../../components/ProductsPagination'

import image11 from '../../assets/intro/introBlanket.jpg'
import image12 from '../../assets/intro/introApron.jpg'
import image13 from '../../assets/intro/introClock.jpg'
import image14 from '../../assets/intro/introMug.jpg'
import image15 from '../../assets/intro/introMug2.jpg'
import { IntroImages } from '../../components/IntroImages'
import { CategoryNavigation } from '../../components/ProductsPagination/styles'

const introImagesArray = [image11, image12, image13, image14, image15]

const productsPerPage = 20
export function Objects() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsContext = useContext(ProductsContext)
  const [activeDataIndex, setActiveDataIndex] = useState(0)

  const {
    objectsData,
    AllPrintToteData,
    ApronData,
    BackpackData,
    BagData,
    ClockData,
    ComforterData,
    DuffleBagData,
    DuvetData,
    JigsawData,
    MagnetData,
    MugData,
    PillowData,
    PinData,
    PostcardData,
    ScarfData,
    ShowerCurtainData,
    SpiralNotebookData,
    StickerData,
    ThrowBlanketData,
    ZipperPouchData,
  } = productsContext
  const dataSources = [
    { name: 'Objects', data: objectsData },
    { name: 'A-Line Dress', data: AllPrintToteData },
    { name: 'Active T-Shirt', data: ApronData },
    { name: 'Baseball', data: BackpackData },
    { name: 'Bucket Hat', data: BagData },
    { name: 'Cap', data: ClockData },
    { name: 'Chiffon Top', data: ComforterData },
    { name: 'Essential T-Shirt', data: DuffleBagData },
    { name: 'Fitted Scoop', data: DuvetData },
    { name: 'Fitted T-Shirt', data: JigsawData },
    { name: 'Graphic T-Shirt', data: MagnetData },
    { name: 'Leggings', data: MugData },
    { name: 'Lightweight Hoodie', data: PillowData },
    { name: 'Long Sleeve', data: PinData },
    { name: 'Long T-Shirt', data: PostcardData },
    { name: 'Mini Skirt', data: ScarfData },
    { name: 'Premium T-Shirt', data: ShowerCurtainData },
    { name: 'Pullover Hoodie', data: SpiralNotebookData },
    { name: 'Racerback', data: StickerData },
    { name: 'Relaxed Fit', data: ThrowBlanketData },
    { name: 'Scoop T-Shirt', data: ZipperPouchData },
  ]
  const currentDataSource = dataSources[activeDataIndex]

  const allData = [...currentDataSource.data]
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allData.slice(indexOfFirstProduct, indexOfLastProduct)

  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
    console.log(currentDataSource.data.length)
  }
  return (
    <PageStyle>
      <IntroImages introImagesArray={introImagesArray} />
      <h5>Categories</h5>

      <CategoryNavigation>
        {dataSources.map((source, index) => (
          <a
            key={index}
            title={`Mudar para ${source.name}`}
            onClick={() => {
              toggleDataSource(index)
              setCurrentPage(1)
            }}
          >
            {source.name}
          </a>
        ))}
      </CategoryNavigation>

      {currentDataSource.data.length >= productsPerPage ? (
        <ProductsPagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            currentDataSource.data.length / productsPerPage,
          )}
          onPageChange={(page) => {
            setCurrentPage(page)
          }}
        />
      ) : (
        ''
      )}
      <h2>{currentDataSource.name}</h2>

      <ProductList allData={currentProducts} />
    </PageStyle>
  )
}
