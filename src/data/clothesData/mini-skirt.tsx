import RedDragon from '../../assets/clothes/mini-skirt/Red-Dragon.jpg'
import GeishaDancingFans from '../../assets/clothes/mini-skirt/Geisha-Dancing-Fans.jpg'
import MarshmallowHibiscus from '../../assets/clothes/mini-skirt/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/mini-skirt/Cosmonaut-meditates.jpg'
import Snake from '../../assets/clothes/mini-skirt/Snake.jpg'

const ItemDescription =
  'Repeated artwork on front and back. Constructed from 88% polyester, 12% elastane. Elastic waistband and stretchy knit fabric allows you to move. For in-between sizes, choose the larger size. Product dimensions refer to the garment measurements, not the measurements of the person. Machine washable. The third party printer of this product is evaluated according to International Labor Organization standards'
const category = 'Mini Skirt'
const ItemPrice = 41.64
const ItemOptions = ['xxs', 'xs', 's', 'm', 'l', 'xl', '2xl']

const MiniSkirtData = [
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
]
export default MiniSkirtData
