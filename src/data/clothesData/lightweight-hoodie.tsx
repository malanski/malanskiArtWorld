import RedDragon from '../../assets/clothes/lightweight-hoodie/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/lightweight-hoodie/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/lightweight-hoodie/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/lightweight-hoodie/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/lightweight-hoodie/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/lightweight-hoodie/Snake.jpg'
import BigButterfly from '../../assets/clothes/lightweight-hoodie/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/lightweight-hoodie/SnakeTattoo.jpg'

const ItemDescription =
  'Chose artwork print location on front or back. Chose colors(black, denim, royal, navy, dark blue, heather charcoal). Slim fit, so size up if you prefer a regular fit, or go two sizes up for a baggy fit. Midweight 7.5 oz (250gsm) French terry, ring-spun for softness. Solid colors are 80% ring-spun cotton, 20% polyester. Heather colors are 60% ring-spun cotton, 40% polyester. Cold wash and hang out to dry to preserve your print. 1 x 1 rib cuffs with spandex to maintain shape. Front pouch (kangaroo) pocket and dyed to match drawcord detailing.'

// Custom printed with your chosen artwork, when you order. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative
const category = 'Lightweight Hoodie'
const ItemPrice = 54.4
const ItemOptions = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl']

const LightweightHoodieData = [
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
export default LightweightHoodieData
