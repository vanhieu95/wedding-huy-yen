import LazyImage from '@/components/LazyImage'
import { useRefContext } from '@/contexts/RefContext'
import { getImageUrl } from '@/utils/imageHelper'

function Hero({ bride, groom }) {
  const { heroRef } = useRefContext()
  const imgUrl = getImageUrl('hero-image.jpg')
  const imgPlaceHolderUrl = getImageUrl('hero-image-small.jpg')
  const image = { src: imgUrl, alt: `${groom} và ${bride}` }

  return (
    <div id="hero" className="relative h-svh" ref={heroRef}>
      <LazyImage
        image={image}
        className="h-svh w-[100vw] object-cover"
        placeholderImage={imgPlaceHolderUrl}
      />
      <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center backdrop-sepia-[.75]">
        <div className="h-52 py-24">
          <p className="mx-auto mb-2 font-shantell text-xl font-bold sm:text-2xl md:text-3xl">
            Save the date
          </p>
          <h1 className="font-shantell text-2xl font-bold sm:text-3xl md:text-4xl">
            {`${groom} & ${bride}`}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
