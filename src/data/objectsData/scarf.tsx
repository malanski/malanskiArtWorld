import RedDragon from '../../assets/objects/scarf/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/scarf/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/scarf/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/scarf/Cosmonaut-meditates.jpg'
import Snake from '../../assets/objects/scarf/Snake.jpg'

const ItemDescription =
  'Full print is visible on the front and reverse. Microfiber polyester with a slightly transparent effect. Hand wash only. Do not dry clean or tumble dry. Scarves may come with a small white border around the hem edge due to the inherent print & construction method of the garment'
const category = 'Scarf'
const ItemPrice = 32.66
const ItemOptions = ['55 x 55 in']

const ScarfData = [
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
    name: `Snake ${category}`,
    image: Snake,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default ScarfData
