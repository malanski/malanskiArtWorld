import RedDragon from '../../assets/clothes/graphic-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/graphic-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/graphic-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/graphic-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/graphic-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/graphic-t-shirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/graphic-t-shirt/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/graphic-t-shirt/SnakeTattoo.jpg'

const ItemDescription =
  "Edge-to-edge front print makes a big, bold, undeniable statement. Regular fit and soft feel. Male model shown is 6'1'' / 186 cm tall and wearing size Medium. Female model shown is 5'5''/ 167 cm tall and wearing size Small. Printed front panel is 96% polyester/4% spandex. Solid color back panel, sleeves and neck bind are 100% cotton. Sublimation transfer technique prints crisp, vivid colors. Print placement may vary slightly from preview"
const category = 'Graphic T-Shirt'
const ItemPrice = 39.16
const ItemOptions = ['xs', 's', 'm', 'l', 'xl', '2xl']

const GraphicTShirtData = [
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
  {
    name: `Snake Tattoo ${category}`,
    image: SnakeTattoo,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
  {
    name: `Big Butterfly ${category}`,
    image: BigButterfly,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default GraphicTShirtData
