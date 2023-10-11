import RedDragon from '../../assets/objects/bag/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/bag/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/bag/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/bag/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/bag/Bee-Sweet.jpg'
import Snake from '../../assets/objects/bag/Snake.jpg'
import SnakeTattoo from '../../assets/objects/bag/SnakeTattoo.jpg'

const ItemDescription =
  "Spacious, sturdy, and sweet alternative to the traditional backpack. Bag measures 15'' x 19.5'' / 38 x 49.5 cm. High-quality metal grommets. Wide, soft drawcord that’s easy on your shoulders. Long-lasting design on both front and back, printed for you when you order. You might also want to check out the classic Backpack or the spacious Duffle Bag"
const category = ' Drawstring Bag'
const ItemPrice = 35.55
const ItemOptions = ['100% polyester woven fabric']

const BagData = [
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
export default BagData
