// packages/lib/src/theme/styles.ts
// Houses generic styles that might be used for container layouts, titles, or buttons.

import { StyleSheet } from 'react-native';
import dimensions from './dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimensions.paddingMedium,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: dimensions.marginMedium,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: dimensions.paddingMedium,
    borderRadius: dimensions.borderRadiusMedium,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
