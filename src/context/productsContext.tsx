import { ReactNode, createContext } from 'react'
import { clothesData, objectsData } from '../data'

export interface IProductData {
  name: string
  image: string
  price: number
  description: string
  options: string[]
}

export interface IProductsCategoryData {
  clothesData: IProductData[]
  objectsData: IProductData[]
}

export const ProductsContext = createContext<IProductsCategoryData>({
  clothesData: [],
  objectsData: [],
})
interface IProductsContextProviderProps {
  children: ReactNode
}
export const ProductsContextProvider = ({
  children,
}: IProductsContextProviderProps) => {
  return (
    <ProductsContext.Provider
      value={{
        clothesData,
        objectsData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
