import LazyImage from '@/components/LazyImage'
import { getImageUrl } from '@/utils/imageHelper'

function Footer({ bride, groom }) {
  const backgroundUrl = getImageUrl('thank-you/background.jpg')
  const backgroundPlaceHolderUrl = getImageUrl('thank-you/background-small.jpg')
  const image = { src: backgroundUrl, alt: 'thank you' }

  return (
    <div className="relative mt-10 h-[600px]">
      <LazyImage
        image={image}
        placeholderImage={backgroundPlaceHolderUrl}
        className="h-[600px] w-[100vw] bg-pink-100 bg-center object-contain opacity-90"
      />
      <div className="absolute bottom-16 left-1/2 block w-full -translate-x-1/2 text-center text-3xl backdrop-blur-3xl md:text-4xl">
        <p className="mx-auto mb-3 w-container font-shantell">{`${groom} - ${bride} `}</p>
        <p className="mx-auto w-container font-shantell">
          Xin trân trọng cảm ơn
        </p>
      </div>
    </div>
  )
}

export default Footer
