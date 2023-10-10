import { IntroImage, IntroImageContainer } from './styles'
import Carousel from 'better-react-carousel'

type Props = {
  introImagesArray: string[]
}

export const IntroImages = ({ introImagesArray }: Props) => {
  return (
    <IntroImageContainer className="carousel">
      <Carousel
        containerStyle={{ width: '90%', margin: 'auto' }}
        cols={4}
        rows={1}
        gap={8}
        loop
        responsiveLayout={[
          {
            breakpoint: 1285,
            cols: 3,
            loop: true,
            autoplay: 1300,
          },
          {
            breakpoint: 900,
            cols: 2,
          },
          {
            breakpoint: 800,
            cols: 1,
            autoplay: 1000,
          },
        ]}
        // mobileBreakpoint={800}
      >
        {introImagesArray.map((image, index) => (
          <Carousel.Item key={index}>
            <IntroImage src={image} width="100%" alt="Woman model in a dress" />
          </Carousel.Item>
        ))}
      </Carousel>
    </IntroImageContainer>
  )
}
