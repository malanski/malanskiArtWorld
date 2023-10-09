import { useEffect, useState } from 'react'
import { IProductData } from '../../context/productsContext'
import { Modal, ProductCardAction, ProductCardStyle } from './styles'

interface IProps {
  allData: IProductData[]
  data: {
    name: string
    image: string
    price: number
    description: string
    options: string[]
  }
}

export const ProductCard = (props: IProps) => {
  const { name, options, image, price } = props.data
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
    <ProductCardStyle>
      <img src={image} alt={name} onClick={() => openModal(props.data)} />
      <p>{name}</p>

      <ProductCardAction>
        <p>${price.toFixed(2).toString().replace('.', ',')}</p>
        <div>Buy</div>
      </ProductCardAction>

      {isModalOpen && selectedProduct && (
        <Modal>
          <h1>{selectedProduct.name}</h1>
          <p>
            {options.map((option, index) => (
              <div key={index}>{option}</div>
            ))}
          </p>
          <p>{selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          <p onClick={closeModal}>Fechar</p>
        </Modal>
      )}
    </ProductCardStyle>
  )
}
