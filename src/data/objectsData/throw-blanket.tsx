import RedDragon from '../../assets/objects/throw-blanket/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/throw-blanket/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/throw-blanket/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/throw-blanket/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/throw-blanket/Bee-Sweet.jpg'
import Snake from '../../assets/objects/throw-blanket/Snake.jpg'
import SnakeTattoo from '../../assets/objects/throw-blanket/SnakeTattoo.jpg'

const ItemDescription =
  'Drape your bed, your couch, or yourself in soft, fluffy art, 100% polyester fleece.Front features edge-to-edge design sublimation printed for you when you order. Reverse is off-white. Machine washable'
const category = 'Throw Blanket'
const ItemPrice = 44.83
const ItemOptions = ['40x30in', '60x50in', '80x60in']

const ThrowBlanketData = [
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
export default ThrowBlanketData
