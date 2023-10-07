import RedDragon from '../../assets/objects/sticker/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/sticker/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/sticker/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/sticker/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/sticker/Bee-Sweet.jpg'
import Snake from '../../assets/objects/sticker/Snake.jpg'

const ItemDescription =
  'Decorate windows, personalize water bottles, or stick ‘em wherever. Removable, kiss-cut vinyl stickers. Super durable and water-resistant. 1/8 inch (3.2mm) transparent border around each design. Transparent with adhesive back, perfect for glass and plastic. Sticker types may be printed and shipped from different locations'
const category = 'Sticker'
const ItemPrice = 15.0
const ItemOptions = ['Glossy', 'Matte', 'Transparent']

const StickerData = [
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
export default StickerData
