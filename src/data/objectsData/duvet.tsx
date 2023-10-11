import RedDragon from '../../assets/objects/duvet/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/duvet/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/duvet/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/duvet/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/duvet/Bee-Sweet.jpg'
import Snake from '../../assets/objects/duvet/Snake.jpg'
import SnakeTattoo from '../../assets/objects/duvet/SnakeTattoo.jpg'

const ItemDescription =
  'Removable, washable cover keeps your duvet fresh and your bedroom decor fresher. Printed 100% polyester top with white 50% polyester/50% cotton back. Concealed zipper opening and internal insert ties for easy assembly. Twin to King sizes available, and Twin fits most extra-long college dorm beds; check sizing guide for detailed measurements. Duvet insert not included. Machine washable'
const category = ' Duvet Cover'
const ItemPrice = 137.63
const ItemOptions = ['Twin', 'Queen', 'King']

const DuvetData = [
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
export default DuvetData
