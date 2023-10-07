import RedDragon from '../../assets/objects/pillow/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/pillow/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/pillow/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/pillow/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/pillow/Bee-Sweet.jpg'
import Snake from '../../assets/objects/pillow/Snake.jpg'

const ItemDescription =
  'Accent cushions with original art, for that instant zhuzh factor in any room. Decorative and durable 100% spun polyester cover with an optional polyester fill/insert. Full-color double-sided design printed for you when you order. Concealed zip opening for a clean look and easy care. Machine washable. For a plump finish, use an insert/fill that is bigger than the cover'
const category = 'Throw Pillow'
const ItemPrice = 22.64
const ItemOptions = ['40x40cm', '45x45cm', '50x50cm']

const PillowData = [
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
export default PillowData
