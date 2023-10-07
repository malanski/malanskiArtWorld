import RedDragon from '../../assets/objects/zipper-pouch/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/zipper-pouch/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/zipper-pouch/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/zipper-pouch/Cosmonaut-meditates.jpg'
import Snake from '../../assets/objects/zipper-pouch/Snake.jpg'

const ItemDescription =
  'Your rugged little personal valet: carry your makeup, pencils, phone, cards, anything. Available in three sizes: check the size chart to find the right one for you. Durable 100% polyester canvas with a metal zipper. Fully lined for added strength. Vibrant, high-quality double-sided design, printed for you when you order. Cold machine wash and low tumble dry'
const category = 'Zipper Pouch'
const ItemPrice = 15.0
const ItemOptions = ['small', 'medium', 'large']

const ZipperPouchData = [
  {
    name: `Red Dragon ${category}`,
    image: RedDragon,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
  {
    name: `Geisha Dancing Fans ${category}`,
    image: GeishaDancingFans,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
  {
    name: `Marshmallow Hibiscus ${category}`,
    image: MarshmallowHibiscus,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
  {
    name: `Cosmonaut Meditates ${category}`,
    image: CosmonautMeditates,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
  {
    name: `Snake ${category}`,
    image: Snake,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default ZipperPouchData
