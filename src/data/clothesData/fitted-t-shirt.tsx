import RedDragon from '../../assets/clothes/fitted-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/fitted-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/fitted-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/fitted-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/fitted-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/fitted-t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/fitted-t-shirt/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/fitted-t-shirt/SnakeTattoo.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, navy, red, turquoise, heather-grey, purple and more). Flattering, stylish cut for dressing up or down. Slim fit, but if that's not your thing, order a size up. Model shown is 5'11''/ 180 cm tall and wearing size Medium. Solid colors are 100% cotton; heathered fabrics are 90% cotton, 10% polyester. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers that are participating members of the Fair Labor Association"
const category = 'Fitted T-Shirt'
const ItemPrice = 35.53
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const FittedTShirtData = [
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
  {
    name: `Big Butterfly ${category}`,
    image: BigButterfly,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default FittedTShirtData
