import RedDragon from '../../assets/clothes/pullover-hoodie/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/pullover-hoodie/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/pullover-hoodie/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/pullover-hoodie/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/pullover-hoodie/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/pullover-hoodie/Snake.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, dark blue, charcoal, grey, navy, purple, creme, turquoise). Hang loose in this comfy tee with a wide scoop neck and generous short sleeves. Boxy, oversized fit. Model shown is 5'11'' / 180 cm tall and wearing size Small.Solid colors are 100% cotton; heather grey is 90% cotton 10% polyester, charcoal heather is 52% Cotton 48% Polyester. The third party printer of this product is evaluated according to International Labor.Organization standards"
const category = 'Relaxed Fit T-Shirt'
const ItemPrice = 35.66
const ItemOptions = ['xs', 's', 'm', 'l', 'xl']

const RelaxedFitData = [
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
]
export default RelaxedFitData
