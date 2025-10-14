import Animated from 'react-native-reanimated';
import { Text } from 'react-native';
import React from 'react';

const AnimatedText = Animated.createAnimatedComponent(
  React.forwardRef((props, ref) => <Text {...props} ref={ref} />)
);

export default AnimatedText;
