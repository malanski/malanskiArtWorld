import RedDragon from '../../assets/clothes/long-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/long-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/long-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/long-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/long-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/long-t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/long-t-shirt/BigButterfly.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, heather chracoal). Extended length, scooped back hem, and larger print area, for those who like the looooong look. Regular fit (but as we said, very long). Model shown is 6' / 183 cm tall and wearing size Large.Midweight 4.2 oz. / 145 gsm fabric, solid color t-shirts are 100% cotton, charcoal heather is 52% cotton/48% polyester. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers that are participating members of the Fair Labor Association"
const category = 'Long T-Shirt'
const ItemPrice = 35.06
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const LongTShirtData = [
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
export default LongTShirtData
