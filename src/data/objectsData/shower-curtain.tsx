import RedDragon from '../../assets/objects/shower-curtain/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/shower-curtain/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/shower-curtain/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/shower-curtain/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/shower-curtain/Bee-Sweet.jpg'
import Snake from '../../assets/objects/shower-curtain/Snake.jpg'

const ItemDescription =
  'Make your bathroom truly your own with a perfect-for-you shower curtain. Soft 100% polyester for a smooth, even drape. Vivid, full color print on the front, with a translucent white reverse side. 71 x 74" (180 x 188 cm) size fits most standard showers and tubs. 12 stitched button holes (rings not included). Liner not included. Machine wash cold'
const category = 'Shower Curtain'
const ItemPrice = 68.11
const ItemOptions = ['Soft 100% polyester for a smooth, even drape']

const ShowerCurtainData = [
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
export default ShowerCurtainData
