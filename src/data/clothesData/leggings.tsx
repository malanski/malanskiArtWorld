import RedDragon from '../../assets/clothes/leggings/Red-Dragon.jpg'
import MarshmallowHibiscus from '../../assets/clothes/leggings/Marshmallow-Hibiscus.jpg'
import BeeSweet from '../../assets/clothes/leggings/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/leggings/Snake.jpg'
import SnakeTattoo from '../../assets/clothes/leggings/SnakeTattoo.jpg'

const ItemDescription =
  'Artwork printed all over leggings. Constructed from 83% polyester, 17% elastane. Elastic waistband and stretchy knit fabric allows you to move. For in-between sizes, choose the larger size. Product dimensions refer to the garment measurements, not the measurements of the person. Machine washable. The third party printer of this product is evaluated according to International Labor Organization standards'
const category = 'Leggings'
const ItemPrice = 59.95
const ItemOptions = ['xxs', 'xs', 's', 'm', 'l', 'xl']

const LeggingsData = [
  {
    name: `Red Dragon ${category}`,
    image: RedDragon,
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
    name: `Bee Sweet ${category}`,
    image: BeeSweet,
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
  {
    name: `Snake Tattoo ${category}`,
    image: SnakeTattoo,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default LeggingsData
