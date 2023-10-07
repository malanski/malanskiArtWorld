import RedDragon from '../../assets/clothes/a-line-dress/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/a-line-dress/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/a-line-dress/Marshmallow-Hibiscus.jpg'
import BeeSweet from '../../assets/clothes/a-line-dress/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/a-line-dress/Snake.jpg'

const ItemDescription =
  'Loose swing shape for an easy, flowy fit. Sizes run large, so order a size down from your usual. Print covers entire front and back panel with your chosen design, by an independent artist. 97% polyester, 3% elastane woven dress fabric with silky handfeel, Note that due to the production process, the placement of the print may vary slightly from the preview, The third party printer of this product is evaluated according to International Labor Organization standards'
const category = 'A-Line Dress'
const ItemPrice = 55.55
const ItemOptions = ['xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl']

const ALineDressData = [
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
export default ALineDressData
