import RedDragon from '../../assets/clothes/scoop-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/scoop-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/scoop-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/scoop-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/scoop-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/scoop-t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/scoop-t-shirt/BigButterfly.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, grey, coal). Luxe fashion tee with scoop neck, curved hem, cap sleeves. Regular fit. Model shown is 5'8.5'' / 174 cm tall and wearing size Small. Midweight 4.4 oz. / 150 gsm fabric. Solid color t-shirts are 100% cotton. Heathered and marled fabrics are 85% cotton/15% polyester. Taped shoulder seams, double-needle hems, and self-fabric neck bind for maximum durability. Preshrunk and includes a wash bag to keep your t-shirt looking great. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative"
const category = 'Premium Scoop T-Shirt'
const ItemPrice = 47.63
const ItemOptions = ['xs', 's', 'm', 'l', 'xl']

const ScoopTShirtData = [
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
export default ScoopTShirtData
