import { ReactNode, createContext } from 'react'
import {
  ActiveTShirtData,
  AllPrintToteData,
  ApronData,
  BackpackData,
  BagData,
  BaseballData,
  BucketHatData,
  CapData,
  ChiffonTopData,
  ClockData,
  ComforterData,
  DuffleBagData,
  DuvetData,
  EssentialTShirtData,
  FittedScoopData,
  FittedTShirtData,
  GraphicTShirtData,
  JigsawData,
  LeggingsData,
  LightweightHoodieData,
  LongSleeveData,
  LongTShirtData,
  MagnetData,
  MiniSkirtData,
  MugData,
  PillowData,
  PinData,
  PostcardData,
  PremiumTShirtData,
  PulloverHoodieData,
  RacerbackData,
  RelaxedFitData,
  ScarfData,
  ScoopTShirtData,
  ShowerCurtainData,
  SleevelessTopData,
  SpiralNotebookData,
  StickerData,
  TShirtData,
  TShirtDressData,
  TankTopData,
  ThrowBlanketData,
  VNeckData,
  ZipperPouchData,
  clothesData,
  objectsData,
} from '../data'
import ALineDressData from '../data/clothesData/a-line-dress'

export interface IProductData {
  name: string
  image: string
  price: number
  description: string
  options: string[]
}

export interface IProductsCategoryData {
  clothesData: IProductData[]
  ALineDressData: IProductData[]
  ActiveTShirtData: IProductData[]
  BaseballData: IProductData[]
  BucketHatData: IProductData[]
  CapData: IProductData[]
  ChiffonTopData: IProductData[]
  EssentialTShirtData: IProductData[]
  FittedScoopData: IProductData[]
  FittedTShirtData: IProductData[]
  GraphicTShirtData: IProductData[]
  LeggingsData: IProductData[]
  LightweightHoodieData: IProductData[]
  LongSleeveData: IProductData[]
  LongTShirtData: IProductData[]
  MiniSkirtData: IProductData[]
  PremiumTShirtData: IProductData[]
  PulloverHoodieData: IProductData[]
  RacerbackData: IProductData[]
  RelaxedFitData: IProductData[]
  ScoopTShirtData: IProductData[]
  SleevelessTopData: IProductData[]
  TankTopData: IProductData[]
  TShirtDressData: IProductData[]
  TShirtData: IProductData[]
  VNeckData: IProductData[]
  objectsData: IProductData[]
  AllPrintToteData: IProductData[]
  ApronData: IProductData[]
  BackpackData: IProductData[]
  BagData: IProductData[]
  ClockData: IProductData[]
  ComforterData: IProductData[]
  DuffleBagData: IProductData[]
  DuvetData: IProductData[]
  JigsawData: IProductData[]
  MagnetData: IProductData[]
  MugData: IProductData[]
  PillowData: IProductData[]
  PinData: IProductData[]
  PostcardData: IProductData[]
  ScarfData: IProductData[]
  ShowerCurtainData: IProductData[]
  SpiralNotebookData: IProductData[]
  StickerData: IProductData[]
  ThrowBlanketData: IProductData[]
  ZipperPouchData: IProductData[]
}

export const ProductsContext = createContext<IProductsCategoryData>({
  clothesData: [],
  ALineDressData: [],
  ActiveTShirtData: [],
  BaseballData: [],
  BucketHatData: [],
  CapData: [],
  ChiffonTopData: [],
  EssentialTShirtData: [],
  FittedScoopData: [],
  FittedTShirtData: [],
  GraphicTShirtData: [],
  LeggingsData: [],
  LightweightHoodieData: [],
  LongSleeveData: [],
  LongTShirtData: [],
  MiniSkirtData: [],
  PremiumTShirtData: [],
  PulloverHoodieData: [],
  RacerbackData: [],
  RelaxedFitData: [],
  ScoopTShirtData: [],
  SleevelessTopData: [],
  TShirtDressData: [],
  TShirtData: [],
  TankTopData: [],
  VNeckData: [],
  objectsData: [],
  AllPrintToteData: [],
  ApronData: [],
  BackpackData: [],
  BagData: [],
  ClockData: [],
  ComforterData: [],
  DuffleBagData: [],
  DuvetData: [],
  JigsawData: [],
  MagnetData: [],
  MugData: [],
  PillowData: [],
  PinData: [],
  PostcardData: [],
  ScarfData: [],
  ShowerCurtainData: [],
  SpiralNotebookData: [],
  StickerData: [],
  ThrowBlanketData: [],
  ZipperPouchData: [],
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
