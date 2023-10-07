import RedDragon from '../../assets/clothes/sleevelessTop/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/sleevelessTop/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/sleevelessTop/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/sleevelessTop/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/sleevelessTop/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/sleevelessTop/Snake.jpg'

const ItemDescription =
  'Chose back color(black, white).Slightly sheer 100% polyester chiffon front panel with silky handfeel. Option of black or white 96% polyester, 4% elastane soft jersey back panel. Front panel is sublimation printed allowing fabric to stay soft and drapey. Loose flowy fit. Garment fully constructed and printed in the USA'
const category = 'Sleeveless Top'
const ItemPrice = 38.13
const ItemOptions = ['xs', 's', 'm', 'l', 'xl', '2xl']

const SleevelessTopData = [
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
export default SleevelessTopData
