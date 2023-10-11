import RedDragon from '../../assets/clothes/t-shirt-dress/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/t-shirt-dress/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/t-shirt-dress/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/t-shirt-dress/Cosmonaut-meditates.jpg'
import Snake from '../../assets/clothes/t-shirt-dress/Snake.jpg'
import BigButterfly from '../../assets/clothes/t-shirt-dress/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/t-shirt-dress/SnakeTattoo.jpg'

const ItemDescription =
  'Graphic T-shirt Dresses feature your chosen design, by an independent artist. Sublimation printed 96% polyester, 4% elastane front panel.  Solid color 100% cotton back/sleeves/rib. Loose casual fit. Graphic T-Shirt Dresses are made and printed in the USA'
const category = 'Graphic T-Shirt Dress'
const ItemPrice = 48.53
const ItemOptions = ['xs', 's', 'm', 'l', 'xl', '2xl']

const TShirtDressData = [
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
export default TShirtDressData
