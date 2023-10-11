import RedDragon from '../../assets/clothes/tank-top/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/tank-top/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/tank-top/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/tank-top/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/tank-top/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/tank-top/Snake.jpg'
import BigButterfly from '../../assets/clothes/tank-top/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/tank-top/SnakeTattoo.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, heather grey, dark grey, denim, blue, red). Slim fit, but if that's not your thing, order a size up. Solid colors are 100% cotton; heathered and marled fabrics are 90% cotton, 10% polyester. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers that are participating members of the Fair Labor Association"
const category = 'Tank Top'
const ItemPrice = 24.05
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const TankTopData = [
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
export default TankTopData
