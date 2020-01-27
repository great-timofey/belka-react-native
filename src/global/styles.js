import { Dimensions } from 'react-native'

const prefix = 'PTSans'

export const fonts = {
  ptsans: {
    bold: `${prefix}-Bold`,
    regular: `${prefix}-Regular`
  }
}

export const { width, height } = Dimensions.get('window')

const designWidth = 1080

export const scale = width / designWidth
export const normalize = value => parseInt(value * scale, 10)

export const makeSquare = size => ({ width: size, height: size })

export const cardWidth = normalize(182)
export const cardHeight = normalize(269)

export const colors = {
  black: '#000000',
  gameBackground: '#18191c',
  semanticHighlight: '#0cb2ff',
  trumpContainer: '#ebe4d4'
}
