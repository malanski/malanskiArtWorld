import RedDragon from '../../assets/objects/all-print-tote-bag/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/all-print-tote-bag/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/all-print-tote-bag/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/all-print-tote-bag/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/all-print-tote-bag/Bee-Sweet.jpg'
import Snake from '../../assets/objects/all-print-tote-bag/Snake.jpg'
import SnakeTattoo from '../../assets/objects/all-print-tote-bag/SnakeTattoo.jpg'

const ItemDescription =
  "Totes deluxe. Sturdy and stylish with a vivid double-sided print. Available in three sizes: check the size chart to find the right one for you. Durable 100% polyester shell. Super strong cotton shoulder straps are 1'' (2.5cm) wide and 21'' (68cm) long for Small bags, 28'' (71 cm) long for Medium bags, and 29'' (74 cm) long for Large bags. Bright, long-lasting, double-sided design, sublimation printed for you when you order. Gentle machine wash. Looking for something more lightweight? Try the Cotton Tote Bag"
const category = 'All print Tote bag'
const ItemPrice = 27.27
const ItemOptions = [
  'All over print',
  'Cotton',
  '33x33cm',
  '41x41cm',
  '46x46cm',
]

const AllPrintToteData = [
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
export default AllPrintToteData
