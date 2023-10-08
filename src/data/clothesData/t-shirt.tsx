import RedDragon from '../../assets/clothes/t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/t-shirt/BigButterfly.jpg'

const ItemDescription =
  'Chose artwork print location on front or back. Chose colors(black, white, heather grey, dark grey, denim, yellow, red, green, and many more).     The standard, traditional t-shirt for everyday wear. Classic, generous, boxy fit. Heavyweight 5.3 oz / 180 gsm fabric, solid colors are 100% preshrunk cotton, heather grey is 90% cotton/10% polyester, denim heather is 50% cotton/ 50% polyester. Double-needle hems and neck band for durability. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative'
const category = 'T-Shirt'
const ItemPrice = 24.05
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl']

const TShirtData = [
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
export default TShirtData
