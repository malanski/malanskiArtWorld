import RedDragon from '../../assets/clothes/active-tshirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/active-tshirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/active-tshirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/active-tshirt/Cosmonaut-meditates.jpg'
import Snake from '../../assets/clothes/active-tshirt/Snake.jpg'
import BigButterfly from '../../assets/clothes/active-tshirt/BigButterfly.jpg'

const ItemDescription =
  "Chose back or front print location, light, breathable performance tee for the gym, the trail, or wherever. Thin, lightweight 3.5 oz., 100% polyester fabric. Comfortable fit with sport-friendly stretch. Male model shown is 6'3'' / 190.5 cm tall and wearing size Medium. Female model shown is 5'11'' / 180 cm tall and wearing size Small. Double-needle stitched hem and self-fabric collar. The third party printer of this product is evaluated according to International Labor Organization standards"
const category = 'Active T-Shirt'
const ItemPrice = 29.33
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl', '3xl']

const ActiveTShirtData = [
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
  {
    name: `Big Butterfly ${category}`,
    image: BigButterfly,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default ActiveTShirtData
