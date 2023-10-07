import RedDragon from '../../assets/objects/clock/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/clock/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/clock/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/clock/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/clock/Bee-Sweet.jpg'
import Snake from '../../assets/objects/clock/Snake.jpg'

const ItemDescription =
  "It's always art o'clock when your clock is a work of art. Printed polypropylene face made for you when you order. Metal hands in your choice of colors. Bamboo wood frame in black, white, or natural finish. Quartz clock mechanism for accurate timekeeping. Clear plexiglass lens.  Built-in rear hook, ready to hang. AA battery not included"
const category = 'Clock'
const ItemPrice = 35.91
const ItemOptions = ['Chose Frame Colors', 'Chose Hand Colors']

const ClockData = [
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
export default ClockData
