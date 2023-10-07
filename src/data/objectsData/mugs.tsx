import MarshmallowHibiscus from '../../assets/objects/mug/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/mug/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/mug/Bee-Sweet.jpg'
import Snake from '../../assets/objects/mug/Snake.jpg'

const ItemDescription =
  "Coffee, tea, or art? Have it all with this eye-opening ceramic mug. Holds 11 oz. (325 ml). Mug diameter is 3.2'' (8.2 cm), not including handle.Dishwasher-safe ceramic. Wraparound design printed for you when you order"
const category = 'Mug'
const ItemPrice = 18.67
const ItemOptions = ['Classic', 'Tall Mug']

const MugData = [
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
]
export default MugData
