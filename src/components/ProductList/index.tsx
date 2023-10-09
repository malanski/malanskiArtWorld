import { useEffect, useState } from 'react'
import { IProductData } from '../../context/productsContext'
import {
  Modal,
  ProductCardAction,
  ProductCardStyle,
  ProductListStyle,
} from './styles'

interface IProps {
  allData: IProductData[]
  data: {
    name: string
    image: string
    price: number
    description: string
    options: string
  }
}

export const ProductList = (props: IProps, { allData }: IProps) => {
  // const { name, options, image, price, description} = props.data
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<IProps['data'] | null>(
    null,
  )
  useEffect(() => {
    document.body.className = isModalOpen ? 'modal-open' : ''
  }, [isModalOpen])

  const openModal = (productData: IProps['data']) => {
    setSelectedProduct(productData)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }
  return (
    <ProductListStyle>
      {allData.map((product, index) => (
        <ProductCardStyle key={index}>
          <img
            src={product.image}
            alt={product.name}
            onClick={() => openModal(props.data)}
          />
          <p>{product.name}</p>

          <ProductCardAction>
            <p>${product.price.toFixed(2).toString().replace('.', ',')}</p>
            <div>Buy</div>
          </ProductCardAction>

          {isModalOpen && selectedProduct && (
            <Modal>
              <h1>{selectedProduct.name}</h1>
              <p onClick={closeModal}>Fechar</p>
            </Modal>
          )}
        </ProductCardStyle>
      ))}
    </ProductListStyle>
  )
}
