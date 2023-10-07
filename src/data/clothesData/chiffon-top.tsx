import RedDragon from '../../assets/clothes/chiffon-top/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/chiffon-top/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/chiffon-top/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/chiffon-top/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/chiffon-top/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/chiffon-top/Snake.jpg'

const ItemDescription =
  "Sheer and slightly silky with an edge-to-edge printed front panel, great for layering. Loose-cropped, boxy fit. Model shown is 5'5'' / 167 cm tall and wearing size Small. Sizes tend to run small, consider bumping a size for a comfortable fit. 100% polyester chiffon. Your choice of black or white back panel, sleeves, and binding. The third party printer of this product is evaluated according to International Labor Organization standards"
const category = 'Chiffon Top'
const ItemPrice = 38.3
const ItemOptions = ['xs', 's', 'm', 'l', 'xl', '2xl']

const ChiffonTopData = [
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
export default ChiffonTopData
