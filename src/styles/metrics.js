import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const getWidthFromDP = (widthPercentage) => {
  const percentageDesired = parseFloat(widthPercentage);
  const widthPercentageToDP = PixelRatio.roundToNearestPixel(
    (width * percentageDesired) / 100,
  );

  return Math.floor(widthPercentageToDP);
};

const getHeightFromDP = (heightPercentage) => {
  const percentageDesired = parseFloat(heightPercentage);
  const heightPercentageToDP = PixelRatio.roundToNearestPixel(
    (height * percentageDesired) / 100,
  );

  return Math.floor(heightPercentageToDP);
};

const nextFontSizeValue = (proportion, baseValue = getWidthFromDP('3%')) => {
  let nextFontSize = baseValue;
  const goldenRatio = 1.618;
  for (let i = 0; i < proportion; i++) {
    nextFontSize = nextFontSize * goldenRatio;
  }
  return Math.floor(nextFontSize);
};

export default {
  extraSmallSize: getWidthFromDP('1%'),
  smallSize: getWidthFromDP('2%'),
  mediumSize: getWidthFromDP('3%'),
  largeSize: getWidthFromDP('4%'),
  extraLargeSize: getWidthFromDP('5%'),
  getWidthFromDP,
  getHeightFromDP,
  nextFontSizeValue,
  width,
  height,
};
