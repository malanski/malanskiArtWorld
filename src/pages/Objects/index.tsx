// import { ProductList } from '../../components/ProductList'
import { SetStateAction, useContext, useState } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { PageStyle, ProductListStyle } from '../styles'
import ProductsPagination from '../../components/ProductsPagination'

import image11 from '../../assets/intro/introBlanket.jpg'
import image12 from '../../assets/intro/introApron.jpg'
import image13 from '../../assets/intro/introClock.jpg'
import image132 from '../../assets/intro/introClock2.jpg'
import image142 from '../../assets/intro/introBag.jpg'
import image143 from '../../assets/intro/introBag2.jpg'
import image14 from '../../assets/intro/introMug.jpg'
import image15 from '../../assets/intro/introMug2.jpg'
import image16 from '../../assets/intro/introApron2.jpg'
import image17 from '../../assets/intro/introPillow.jpg'
import image18 from '../../assets/intro/introShower.jpg'
import image19 from '../../assets/intro/introSketch.jpg'
import { IntroImages } from '../../components/IntroImages'
import { CategoryNavigation } from '../../components/ProductsPagination/styles'
import { ProductCard } from '../../components/ProductCard'

const introImagesArray = [
  image11,
  image12,
  image13,
  image132,
  image14,
  image142,
  image143,
  image15,
  image16,
  image17,
  image18,
  image19,
]

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
    { name: 'All Objects', data: objectsData },
    { name: 'All Print Tote', data: AllPrintToteData },
    { name: 'Apron', data: ApronData },
    { name: 'Backpack', data: BackpackData },
    { name: 'Drawstring Bag', data: BagData },
    { name: 'Clock', data: ClockData },
    { name: 'Comforter', data: ComforterData },
    { name: 'Duffle Bag', data: DuffleBagData },
    { name: 'Duvet', data: DuvetData },
    { name: 'Jigsaw Puzzle', data: JigsawData },
    { name: 'Magnet', data: MagnetData },
    { name: 'Mug', data: MugData },
    { name: 'Pillow', data: PillowData },
    { name: 'Pin', data: PinData },
    { name: 'Postcard', data: PostcardData },
    { name: 'Scarf', data: ScarfData },
    { name: 'Shower Curtain', data: ShowerCurtainData },
    { name: 'Spiral Notebook', data: SpiralNotebookData },
    { name: 'Sticker', data: StickerData },
    { name: 'Throw Blanket', data: ThrowBlanketData },
    { name: 'Zipper Pouch', data: ZipperPouchData },
  ]
  const currentDataSource = dataSources[activeDataIndex]

  const allData = [...currentDataSource.data]
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allData.slice(indexOfFirstProduct, indexOfLastProduct)

  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
  }
  return (
    <PageStyle>
      <IntroImages introImagesArray={introImagesArray} />
      {/* <h5>Categories</h5> */}

      <CategoryNavigation>
        {dataSources.map((source, index) => (
          <a
            key={index}
            title={`Only ${source.name}'s`}
            onClick={() => {
              toggleDataSource(index)
              setCurrentPage(1)
            }}
            className={`page-item ${
              source.name === currentDataSource.name ? 'active' : ''
            }`}
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
      <ProductListStyle>
        {currentProducts.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </ProductListStyle>

      {/* <ProductList allData={currentProducts} /> */}
    </PageStyle>
  )
}
