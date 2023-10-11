import RedDragon from '../../assets/clothes/pullover-hoodie/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/pullover-hoodie/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/pullover-hoodie/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/pullover-hoodie/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/pullover-hoodie/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/pullover-hoodie/Snake.jpg'
import BigButterfly from '../../assets/clothes/pullover-hoodie/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/pullover-hoodie/SnakeTattoo.jpg'

const ItemDescription =
  'Chose artwork print location on front or back. Chose colors(black, white, heather oatmeal, charcoal, grey, bue, dark blue, pale pink). Note: If you like your hoodies baggy go 2 sizes up. Heavyweight 8.25 oz. (~280 gsm) cotton-rich fleece. Solid colors are 80% cotton, 20% polyester. Heather Grey is 70% cotton, 30% polyester. Charcoal Heather is 60% cotton, 40% polyester. Front pouch pocket, matching drawstring and rib cuffs. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative'
const category = 'Pullover Hoodie'
const ItemPrice = 56.04
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const PulloverHoodieData = [
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
export default PulloverHoodieData
