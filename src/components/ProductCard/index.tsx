import { useEffect, useState } from 'react'
import {
  Modal,
  ModalContainer,
  ModalDescription,
  ModalInfoContainer,
  ModalOptions,
  ProductCardAction,
  ProductCardButton,
  ProductCardPrice,
  ProductCardStyle,
  ProductModalAction,
} from './styles'

interface IProps {
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
    if (isModalOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
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
        <ProductCardPrice>
          <span>${price.toFixed(2).toString().replace('.', ',')}</span>
        </ProductCardPrice>
        <ProductCardButton title={`Buy ${name}`}>Buy</ProductCardButton>
      </ProductCardAction>

      {isModalOpen && selectedProduct && (
        <Modal>
          <ModalContainer>
            <h3>{selectedProduct.name}</h3>
            <img src={image} alt={name} onClick={() => openModal(props.data)} />
            <ModalOptions>
              <p>Sizes:</p>
              {options.map((option, index) => (
                <p key={index}>{option}</p>
              ))}
            </ModalOptions>
            <ModalInfoContainer>
              <ModalDescription>{selectedProduct.description}</ModalDescription>
              <ProductModalAction>
                <ProductCardPrice>
                  <span>Price: ${selectedProduct.price}</span>
                </ProductCardPrice>
                <div>
                  <ProductCardButton
                    onClick={closeModal}
                    title={`Buy ${selectedProduct.name}`}
                  >
                    Buy
                  </ProductCardButton>
                  <p title="Cancel" onClick={closeModal}>
                    Back
                  </p>
                </div>
              </ProductModalAction>
            </ModalInfoContainer>
          </ModalContainer>
        </Modal>
      )}
    </ProductCardStyle>
  )
}
