import RedDragon from '../../assets/objects/apron/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/apron/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/apron/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/apron/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/apron/Bee-Sweet.jpg'
import Snake from '../../assets/objects/apron/Snake.jpg'

const ItemDescription =
  "Stay clean in style when you're doing dirty work in the kitchen, in the art studio, in the garden, or at the BBQ. All-over sublimation print design. Durable neck band and extra-long black ties that wrap around to tie in front. One size fits most adults.Easy care, machine washable"
const category = 'Apron'
const ItemPrice = 23.71
const ItemOptions = ['100% polyester']

const ApronData = [
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
]
export default ApronData
