import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function LazyImage({ image, placeholderImage, className }) {
  return (
    <LazyLoadImage
      alt={image.alt}
      effect="blur"
      placeholderSrc={placeholderImage}
      src={image.src}
      className={className}
    />
  )
}

export default LazyImage
