import RedDragon from '../../assets/objects/pin/Red-Dragon.jpg'
import MarshmallowHibiscus from '../../assets/objects/pin/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/pin/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/pin/Bee-Sweet.jpg'
import Snake from '../../assets/objects/pin/Snake.jpg'
import SnakeTattoo from '../../assets/objects/pin/SnakeTattoo.jpg'

const ItemDescription =
  'Round pinback buttons for instant awesome, just about anywhere. Your choice of two sizes: petite Small (1.25"/32mm) and in-your-face Large (2.25"/57mm).Made with scratch- and UV-resistant Mylar. Responsibly produced. Printed to order, just for you. WARNING: Choking hazard--small parts. Not for children under 3 yrs. AGE GRADE WARNING: This product is intended for age 8 and up. WARNING: Sharp point hazard. This product contains a functional sharp point.'
const category = 'Pin'
const ItemPrice = 4.04
const ItemOptions = ['small', 'large']

const PinData = [
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
export default PinData
