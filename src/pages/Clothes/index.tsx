import { ProductList } from '../../components/ProductList'
import { SetStateAction, useContext, useState } from 'react'
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

import { CategoryNavigation } from '../../components/ProductsPagination/styles'

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
  const [activeDataIndex, setActiveDataIndex] = useState(0)
  const productsContext = useContext(ProductsContext)
  const {
    clothesData,
    ALineDressData,
    ActiveTShirtData,
    BaseballData,
    BucketHatData,
    CapData,
    ChiffonTopData,
    EssentialTShirtData,
    FittedScoopData,
    FittedTShirtData,
    GraphicTShirtData,
    LeggingsData,
    LightweightHoodieData,
    LongSleeveData,
    LongTShirtData,
    MiniSkirtData,
    PremiumTShirtData,
    PulloverHoodieData,
    RacerbackData,
    RelaxedFitData,
    ScoopTShirtData,
    SleevelessTopData,
    TShirtDressData,
    TShirtData,
    TankTopData,
    VNeckData,
  } = productsContext
  const allData = [...clothesData]
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allData.slice(indexOfFirstProduct, indexOfLastProduct)

  const dataSources = [
    { name: 'Clothes', data: allData },
    { name: 'A-Line Dress', data: ALineDressData },
    { name: 'Active T-Shirt', data: ActiveTShirtData },
    { name: 'Baseball', data: BaseballData },
    { name: 'Bucket Hat', data: BucketHatData },
    { name: 'Cap', data: CapData },
    { name: 'Chiffon Top', data: ChiffonTopData },
    { name: 'Essential T-Shirt', data: EssentialTShirtData },
    { name: 'Fitted Scoop', data: FittedScoopData },
    { name: 'Fitted T-Shirt', data: FittedTShirtData },
    { name: 'Graphic T-Shirt', data: GraphicTShirtData },
    { name: 'Leggings', data: LeggingsData },
    { name: 'Lightweight Hoodie', data: LightweightHoodieData },
    { name: 'Long Sleeve', data: LongSleeveData },
    { name: 'Long T-Shirt', data: LongTShirtData },
    { name: 'Mini Skirt', data: MiniSkirtData },
    { name: 'Premium T-Shirt', data: PremiumTShirtData },
    { name: 'Pullover Hoodie', data: PulloverHoodieData },
    { name: 'Racerback', data: RacerbackData },
    { name: 'Relaxed Fit', data: RelaxedFitData },
    { name: 'Scoop T-Shirt', data: ScoopTShirtData },
    { name: 'Sleeveless Top', data: SleevelessTopData },
    { name: 'T-Shirt Dress', data: TShirtDressData },
    { name: 'T-Shirt', data: TShirtData },
    { name: 'Tank Top', data: TankTopData },
    { name: 'V-Neck', data: VNeckData },
  ]

  const currentDataSource = dataSources[activeDataIndex]
  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
    console.log(currentDataSource.data.length)
  }
  return (
    <PageStyle>
      <IntroImages introImagesArray={introImagesArray} />

      <CategoryNavigation>
        {dataSources.map((source, index) => (
          <span key={index}>
            <a
              title={`Mudar para ${source.name}`}
              onClick={() => toggleDataSource(index)}
            >
              {source.name}
            </a>
          </span>
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
      <h2>{currentDataSource.name} View</h2>

      <ProductList allData={currentProducts} />
    </PageStyle>
  )
}
