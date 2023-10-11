import RedDragon from '../../assets/clothes/racerback-tank-top/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/racerback-tank-top/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/racerback-tank-top/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/racerback-tank-top/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/racerback-tank-top/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/racerback-tank-top/Snake.jpg'
import BigButterfly from '../../assets/clothes/racerback-tank-top/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/pullover-hoodie/SnakeTattoo.jpg'

const ItemDescription =
  'Chose colors(black, white, dark blue). Form-fitting shirt for women who like a feminine tank top. 100% cotton, generous arm openings and exceptionally smooth finish. Cold wash and hang out to dry. The third party printer of this product is evaluated according to International Labor Organization standards.'
const category = 'Racerback Tank Top'
const ItemPrice = 26.37
const ItemOptions = ['xs', 's', 'm', 'l']

const RacerbackData = [
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
export default RacerbackData
