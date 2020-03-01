import { Dimensions, Platform } from 'react-native'

const ptSansPrefix = 'PTSans'

export const fonts = {
  ptsans: {
    bold: `${ptSansPrefix}-Bold`,
    regular: `${ptSansPrefix}-Regular`,
  },
}

export const selectStyles = (ios, android) =>
  Platform.select({
    ios,
    android,
  })

export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const designWidth = 1080

export const TOP_PLAYER_OFFSET = 0.25

export const scale = deviceWidth / designWidth
export const normalize = value => parseInt(value * scale, 10)

export const squareSize = size => ({ width: size, height: size })

export const CARD_WIDTH = normalize(182)
export const CARD_HEIGHT = normalize(269)

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const colors = {
  black: '#000000',
  white: '#ffffff',
  appBackground: '#18191c',
  baseCard: '#1a1b1f',
  semanticHighlight: '#0cb2ff',
  semanticSecondary: '#616372',
  trumpContainer: '#ebe4d4',
  semanticAttention: '#e7af43',
  semanticPositive: '#25bb15',
  semanticPrimary: '#e4a120',
  semanticNegative: '#d31219',
}

export const gradients = {
  buttons: {
    Primary: {
      colors: ['#ebc57a', '#e29a0c'],
      locations: [0, 1],
      useAngle: true,
      angle: -174,
    },
    Negative: {
      colors: ['#eb877a', '#e2350c'],
      locations: [0, 1],
      useAngle: true,
      angle: -174,
    },
  },
  baseCard: {
    colors: ['#1b1c21', '#101114'],
    locations: [0, 1],
    useAngle: true,
    angle: 84,
  },
}
