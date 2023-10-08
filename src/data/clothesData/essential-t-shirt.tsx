import RedDragon from '../../assets/clothes/essential-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/essential-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/essential-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/essential-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/essential-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/essential-t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/essential-t-shirt/BigButterfly.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, navy, red, blue, asphalt, green and more). Just your everyday smooth, comfy tee, a wardrobe staple. Slim fit, so size up if you prefer a looser fit, or check out the Classic T-Shirt. Male model shown is 6'0''/ 183 cm tall and wearing size Large. Female model shown is 5'8'' / 173 cm tall and wearing size Small. Midweight 4.2 oz. / 145 gsm fabric, solid color t-shirts are 100% cotton, heather grey t-shirts are 90% cotton/10% polyester charcoal heather t-shirts are 52% cotton/48% polyester. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative"
const category = 'Chiffon Top'
const ItemPrice = 24.41
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl', '3xl']

const EssentialTShirtData = [
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
export default EssentialTShirtData
