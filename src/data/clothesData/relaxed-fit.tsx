import RedDragon from '../../assets/clothes/relaxed-fit/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/relaxed-fit/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/relaxed-fit/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/relaxed-fit/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/relaxed-fit/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/relaxed-fit/Snake.jpg'
import BigButterfly from '../../assets/clothes/relaxed-fit/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/relaxed-fit/SnakeTattoo.jpg'

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
export default RelaxedFitData
