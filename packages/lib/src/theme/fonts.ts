// packages/lib/src/theme/fonts.ts
// Defines shared font styling constants, typically used with React Native's StyleSheet.

import { StyleSheet } from 'react-native';

const fonts = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  caption: {
    fontSize: 14,
    fontWeight: '300',
    color: '#757575',
  },
});

export default fonts;
