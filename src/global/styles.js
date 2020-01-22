import { Dimensions } from 'react-native'

const prefix = 'PTSans'

export const fonts = {
  ptsans: {
    bold: `${prefix}-Bold`,
    regular: `${prefix}-Regular`
  }
}

export const { width, height } = Dimensions.get('window')
