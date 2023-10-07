import RedDragon from '../../assets/objects/spiral-notebook/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/spiral-notebook/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/spiral-notebook/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/spiral-notebook/Cosmonaut-meditates.jpg'
import Snake from '../../assets/objects/spiral-notebook/Snake.jpg'
import BeeSweet from '../../assets/objects/spiral-notebook/Bee-Sweet.jpg'

const ItemDescription =
  '120 pages. Cover 350gsm, paper stock 90gsm. Front cover print from an independent designer. Available in a selection of ruled or graph pages. Handy document pocket inside the back cover'
const category = 'Spiral Notebook'
const ItemPrice = 15.0
const ItemOptions = ['Ruled Line', 'Graph']

const SpiralNotebookData = [
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
export default SpiralNotebookData
