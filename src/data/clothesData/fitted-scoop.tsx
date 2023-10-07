import RedDragon from '../../assets/clothes/fitted-scoop/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/fitted-scoop/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/fitted-scoop/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/fitted-scoop/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/fitted-scoop/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/fitted-scoop/Snake.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, navy, red, turquoise, heather-grey, purple and more). Scoop neck, cap sleeves, and fitted cut add up to a fashionably casual tee. Slim fit, so consider going a size up if that's not your thing. Model shown is 5'11'' / 180cm tall and wearing size Medium. Solid colors are 100% cotton; heathered fabrics are 90% cotton, 10% polyester. Cold wash and hang dry to preserve your print. The third party printer of this product is evaluated according to International Labor Organization standards"
const category = 'Fitted Scoop T-Shirt'
const ItemPrice = 28.58
const ItemOptions = ['xs', 's', 'm', 'l', 'xl']

const FittedScoopData = [
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
export default FittedScoopData
