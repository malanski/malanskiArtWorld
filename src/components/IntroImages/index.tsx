import { IntroImage, IntroImageContainer } from './styles'
import Carousel from 'better-react-carousel'

type Props = { introImagesArray: string[] }
export const IntroImages = ({ introImagesArray }: Props) => {
  return (
    <IntroImageContainer>
      <Carousel cols={1} rows={1} gap={10} loop>
        {introImagesArray.map((image, index) => (
          <Carousel.Item key={index}>
            <IntroImage src={image} alt="Woman model in a dress" />
          </Carousel.Item>
        ))}
      </Carousel>
      <hr></hr>
    </IntroImageContainer>
  )
}
