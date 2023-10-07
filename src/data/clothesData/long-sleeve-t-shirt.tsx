import RedDragon from '../../assets/clothes/long-sleeve-t-shirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/long-sleeve-t-shirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/long-sleeve-t-shirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/long-sleeve-t-shirt/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/long-sleeve-t-shirt/Bee-Sweet.jpg'
import Snake from '../../assets/clothes/long-sleeve-t-shirt/Snake.jpg'

const ItemDescription =
  "Chose artwork print location on front or back. Chose colors(black, white, cardinal, dark blue, heather grey, dark grey). Layer up in a soft long-sleeve tee, ideal for chilly days or chillier nights. Slim fit, so order a size up if you prefer for a more relaxed fit. Male model shown is 6'1'' / 186 cm tall and wearing size Large. Female model shown is 5'4'' / 163 cm tall and wearing size Small. Solid colors are 100% cotton, heathered and marled fabrics are 90% cotton, 10% polyester. The third party printer of this product is evaluated according to International Labor Organization standards. The printer of this product sources blanks from manufacturers that are participating members of the Fair Labor Association"
const category = 'Long sleeve T-Shirt'
const ItemPrice = 34.02
const ItemOptions = ['s', 'm', 'l', 'xl', '2xl']

const LongSleeveData = [
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
export default LongSleeveData
