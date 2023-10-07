import RedDragon from '../../assets/objects/backpack/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/backpack/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/backpack/Marshmallow-Hibiscus.jpg'
import BeeSweet from '../../assets/objects/backpack/Bee-Sweet.jpg'
import Snake from '../../assets/objects/backpack/Snake.jpg'

const ItemDescription =
  "Carry your stuff, express yourself, keep your hands free, it's win-win-win. Bag measures 17” x 12.5” x 5” / 43 x 31 x 12 cm. Most standard laptops fit in the internal laptop pocket, which measures 13.5'' x 10.5'' / 34 x 27 cm. Vivid all-over design, sublimation printed for you when you order  External mesh pocket and adjustable padded straps. Pocket detail may have a slight variance due to your local fulfiller. For a different style, check out the Drawstring Bag. For more space, try the Duffle Bag"
const category = 'Backpack'
const ItemPrice = 52.55
const ItemOptions = ['100% polyester shell']

const BackpackData = [
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
]
export default BackpackData
