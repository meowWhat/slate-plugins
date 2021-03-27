import { ImageElementStyleProps, ImageElementStyles } from '../types'

export const getImageElementStyles = ({
  className,
}: ImageElementStyleProps): ImageElementStyles => {
  return {
    root: [
      {
        // Insert css properties
      },
      className,
    ],
    img: {
      // boxShadow: focused && selected ? '0 0 0 3px #B4D5FF' : 'none',
    },
  }
}
