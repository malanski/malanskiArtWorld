import RedDragon from '../../assets/objects/postcard/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/postcard/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/postcard/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/postcard/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/postcard/Bee-Sweet.jpg'
import Snake from '../../assets/objects/postcard/Snake.jpg'

const ItemDescription =
  'Unique artwork for posting words of wisdom or decorating your wall, fridge or office. Digitally printed cards on heavyweight stock. Uncoated reverse provides a superior writing surface.'
const category = 'Postcard'
const ItemPrice = 1.57
const ItemOptions = ['1.26 when you buy 3+']

const PostcardData = [
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
export default PostcardData
