import MarshmallowHibiscus from '../../assets/clothes/cap/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/cap/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/cap/Bee-Sweet.jpg'
import BigButterfly from '../../assets/clothes/cap/BigButterfly.jpg'

const ItemDescription =
  "The relaxed polo-style cap that isn't just for dads anymore. Unstructured, medium-to-high-profile crown with slightly curved bill. Buckle closure for adjustable fit. 100% cotton in all colors, fabric weight 7 oz. / 240 gsm. Five-panel design with double-wide front panel for seamless printing.Printed in, and shipped from, the USA. Sized for ages 13+.Spot clean with damp cloth"
const category = 'Cap'
const ItemPrice = 24.62
const ItemOptions = ['beige', 'slate-grey', 'navy', 'green', 'pink', 'white']

const CapData = [
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
    name: `Big Butterfly ${category}`,
    image: BigButterfly,
    price: ItemPrice,
    description: ItemDescription,
    options: ItemOptions,
  },
]
export default CapData
