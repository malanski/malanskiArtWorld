import RedDragon from '../../assets/objects/magnet/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/magnet/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/magnet/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/magnet/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/magnet/Bee-Sweet.jpg'
import Snake from '../../assets/objects/magnet/Snake.jpg'
import SnakeTattoo from '../../assets/objects/magnet/SnakeTattoo.jpg'

const ItemDescription =
  'Die-cut magnets add a touch of easily switchable flair to your fridge, locker, or file cabinet. Flexible, durable 20mil / 0.5mm vinyl. Vibrant color printing. Approximately 4mm white border around design. WARNING: Choking Hazard small parts. Not for children under 3.This product contains magnets. Swallowed magnets can stick together across intestines causing serious injuries. Seek immediate medical attention if magnets are swallowed.Not a toy. For decorative use only.'
const category = 'Magnet'
const ItemPrice = 8.3
const ItemOptions = ['Available in three sizes']

const MagnetData = [
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
export default MagnetData
