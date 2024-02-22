import {Dimensions} from 'react-native';

export const {height: screenHeight, width: screenWidth} =
  Dimensions.get('screen');

export const emailRegex =
  `/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`;
