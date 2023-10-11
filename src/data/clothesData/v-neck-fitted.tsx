import RedDragon from '../../assets/clothes/v-neck-fitted/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/v-neck-fitted/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/v-neck-fitted/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/v-neck-fitted/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/v-neck-fitted/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/v-neck-fitted/Snake.jpg'
import SnakeTattoo from '../../assets/clothes/v-neck-fitted/SnakeTattoo.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, heather grey, dark grey, navy, blue, red).Go from couch to club with a medium-deep v-neck and flattering fitted cut. Slim fit, so size up for a looser fit. Model shown is 5'11'' / 180 cm tall and wearing size Medium. Made of 60% combed ring-spun cotton, 40% polyester. Cold wash and hang dry to preserve your print. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers that are participating members of the Fair Labor Association"
const category = 'Fitted V-Neck T-Shirt'
const ItemPrice = 28.58
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const VNeckData = [
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
export default VNeckData
