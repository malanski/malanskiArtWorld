import RedDragon from '../../assets/clothes/baseball/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/baseball/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/baseball/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/baseball/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/baseball/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/baseball/Snake.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose sleeves colors(black, navy, red, blue, asphalt, green) That vintage athletic look, with contrast 3/4 baseball sleeves and collar. Slim fit, but if that´s not your thing, order a size up. Male model shown is 6'1''/ 185 cm tall and wearing size Large. 52% ringspun cotton and 48% polyester. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers that are participating members of the Fair Labor Association"
const category = 'Baseball 3/4 Sleeve T-Shirt'
const ItemPrice = 35.1
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const BaseballData = [
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
export default BaseballData
