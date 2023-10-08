import React from 'react'
import { ProductsListPagination } from './styles'

interface ProductsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const elementY = window.scrollY + elementRect.top
      const scrollY = elementY - window.innerHeight / 1.5
      window.scrollBy({ top: scrollY, behavior: 'smooth' })
    }
  }

  return (
    <ProductsListPagination id="productList">
      <h5>Páginas</h5>
      <div>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              onClick={() => {
                onPageChange(index + 1)
                scrollToElement('productList')
              }}
              className={`page-item ${
                index + 1 === currentPage ? 'active' : ''
              }`}
            >
              <a href="#" title={`Página ${index + 1}`}>
                {index + 1}
              </a>
            </span>
          ))}
      </div>
    </ProductsListPagination>
  )
}

export default ProductsPagination
