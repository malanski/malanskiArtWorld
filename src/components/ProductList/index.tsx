import { IProductData } from '../../context/productsContext'
import { ProductCardAction, ProductCardStyle, ProductListStyle } from './styles'

type IProps = {
  allData: IProductData[]
}
export const ProductList = ({ allData }: IProps) => {
  return (
    <ProductListStyle>
      {allData.map((product, index) => (
        <ProductCardStyle key={index}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>

          <ProductCardAction>
            <p>${product.price.toFixed(2).toString().replace('.', ',')}</p>
            <div>Buy</div>
          </ProductCardAction>
        </ProductCardStyle>
      ))}
    </ProductListStyle>
  )
}
