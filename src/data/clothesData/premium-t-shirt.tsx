import RedDragon from '../../assets/clothes/premium-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/premium-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/premium-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/premium-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/premium-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/premium-t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/premium-t-shirt/BigButterfly.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, heather grey, dark grey). Regular fit. Model shown is 6' / 183 cm tall and wearing size Medium. Heavyweight 5.3 oz. / 180 gsm fabric, solid color t-shirts are 100% cotton, heathered and marled fabrics are 85% cotton/15% polyester. Taped shoulder seams, double-needle hems, and self-fabric neck bind for maximum durability. Preshrunk. The third party printer of this product is evaluated according to International Labor Organization standards.The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative"
const category = 'Premium T-Shirt'
const ItemPrice = 50.13
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl', '3xl']

const PremiumTShirtData = [
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
    name: `Big Butterfly ${category}`,
    image: BigButterfly,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default PremiumTShirtData
