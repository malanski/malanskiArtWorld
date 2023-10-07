import RedDragon from '../../assets/objects/comforter/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/objects/comforter/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/objects/comforter/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/objects/comforter/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/objects/comforter/Bee-Sweet.jpg'
import Snake from '../../assets/objects/comforter/Snake.jpg'

const ItemDescription =
  "With this big, bold comforter, making your bed will be your favorite part of the day. Vivid full-color front printed for you when you order; back is white.100% polyester with 0.75'' (2 cm) polyester filling and double-square quilted pattern. Twin to King sizes available, and Twin XL fits most extra-long college dorm beds; check sizing guide for detailed measurements. Pillows and shams not included. Machine washable"
const category = 'Comforter'
const ItemPrice = 141.23
const ItemOptions = ['Twin', 'Twin XL', 'Full', 'Queen', 'King']

const ComforterData = [
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
export default ComforterData
