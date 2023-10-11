import RedDragon from '../../assets/objects/jigsaw/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/jigsaw/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/jigsaw/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/jigsaw/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/jigsaw/Bee-Sweet.jpg'
import Snake from '../../assets/objects/jigsaw/Snake.jpg'
import SnakeTattoo from '../../assets/objects/jigsaw/SnakeTattoo.jpg'

const ItemDescription =
  'An irresistible family activity, relaxing hobby, or gift for any puzzle aficionado. Choose from five sizes: 30 pieces, 110 pieces, 252 pieces, 500 pieces, or 1000 pieces. High-quality chipboard pieces with vibrant sublimated print. Packaged in a gift-ready metal box with the puzzle image on the lid. Recommended ages: 30 pieces for ages 4+, 110 pieces for ages 6+, 252 pieces for ages 8+, 500 pieces for ages 9+, and 1000 pieces for adults. WARNING: Choking Hazard—Small Parts. Not for children under 3 years. Printed just for you when you order'
const category = ' Jigsaw Puzzle'
const ItemPrice = 35.55
const ItemOptions = [
  '30 pieces',
  '110 pieces',
  '252 pieces',
  '500 pieces',
  '1000 pieces',
]

const JigsawData = [
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
export default JigsawData
