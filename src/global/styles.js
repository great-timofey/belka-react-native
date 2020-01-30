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

export const squareSize = size => ({ width: size, height: size })

export const cardWidth = normalize(182)
export const cardHeight = normalize(269)

export const colors = {
  black: '#000000',
  white: '#ffffff',
  appBackground: '#18191c',
  baseCard: '#1a1b1f', // 6deg, rgb(27,28,33) 0%, rgb(22,23,27) 52%, rgb(16,17,20) 100%
  semanticHighlight: '#0cb2ff',
  semanticSecondary: '#616372',
  trumpContainer: '#ebe4d4',
  semanticAttention: '#e7af43',
  semanticPositive: '#25bb15',
  semanticPrimary: '#e4a120' // -96deg, rgb(235,197,122) 0%, rgb(226,154,12) 100%
}
