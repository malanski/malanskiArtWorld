import RedDragon from '../../assets/objects/duffle-bag/Red-Dragon.jpg'
import MarshmallowHibiscus from '../../assets/objects/duffle-bag/Marshmallow-Hibiscus.jpg'
import BeeSweet from '../../assets/objects/duffle-bag/Bee-Sweet.jpg'
import Snake from '../../assets/objects/duffle-bag/Snake.jpg'

const ItemDescription =
  'Carry some serious baggage with this roomy classic, from gym to work to travel. Choose small (19.5” x 9.5” x 9.5” / 49 x 24 x 24 cm) or large (23” x 12” x 12” / 58 x 30 x 30 cm). Durable 100% polyester shell. Internal zipper pocket, external mesh pocket, and removable, adjustable padded shoulder strap. Bold, vibrant design, sublimation printed for you when you order. Need a more compact option? Try the Backpack or Drawstring Bag'
const category = 'Duffle Bag'
const ItemPrice = 58.67
const ItemOptions = ['small', 'large']

const DuffleBagData = [
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
]
export default DuffleBagData
