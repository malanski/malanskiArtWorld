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
  const [scrollPosition, setScrollPosition] = React.useState<number>(0)

  const handlePageChange = (page: number) => {
    const currentPosition = window.scrollY
    setScrollPosition(currentPosition)
    onPageChange(page)
    // scrollToElement('productList')
  }

  // const scrollToElement = (elementId: string) => {
  //   const element = document.getElementById(elementId)
  //   if (element) {
  //     const elementRect = element.getBoundingClientRect()
  //     const offsetTop = elementRect.top + window.scrollY
  //     const scrollY = offsetTop - window.innerHeight / 1.8
  //     window.scrollBy({ top: scrollY, behavior: 'smooth' })
  //   }
  // }

  React.useEffect(() => {
    window.scrollTo(0, scrollPosition)
  }, [currentPage, scrollPosition])

  return (
    <ProductsListPagination>
      <div>
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              onClick={() => {
                handlePageChange(index + 1)
              }}
              className={`Page ${index + 1 === currentPage ? 'active' : ''}`}
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
