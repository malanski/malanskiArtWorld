import MarshmallowHibiscus from '../../assets/clothes/bucket-hat/Marshmallow-Hibiscus.jpg'
import CosmonautMeditates from '../../assets/clothes/bucket-hat/Cosmonaut-meditates.jpg'
import BeeSweet from '../../assets/clothes/bucket-hat/Bee-Sweet.jpg'
import BigButterfly from '../../assets/clothes/bucket-hat/BigButterfly.jpg'
import SnakeTattoo from '../../assets/clothes/bucket-hat/SnakeTattoo.jpg'

const ItemDescription =
  "This packable, scrunchable, lightweight headwear classic is ready for adventure, from the beach to the street to the trail. Breathable 100% cotton with eyelet ventilation. Flat top. Moderate brim is 2.2'' (5.5 cm) wide to keep the sun off your face. Unstructured crown is 3.1'' (8 cm) deep. Easy care: just spot clean and dry in shade"
const category = 'Bucket Hat'
const ItemPrice = 24.62
const ItemOptions = ['sand', 'navy', 'pink', 'white']

const BucketHatData = [
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
export default BucketHatData
